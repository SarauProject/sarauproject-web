import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Plus, Edit, Trash2, LogOut, Video, FileText, Save, Loader2 } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AdminDashboard = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingVideo, setEditingVideo] = useState(null);
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [savingContent, setSavingContent] = useState(false);
  const [contentMsg, setContentMsg] = useState('');
  const navigate = useNavigate();

  const [videoForm, setVideoForm] = useState({
    title: '', description: '', youtube_id: '', duration: '', instruments: ''
  });

  const [heroContent, setHeroContent] = useState({
    title: '', subtitle1: '', subtitle2: ''
  });
  const [aboutContent, setAboutContent] = useState({
    title: '', subtitle: '', description: '', years: '', shows: '', countries: ''
  });
  const [contactContent, setContactContent] = useState({
    email: '', youtube: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchVideos();
    fetchContent();
  }, [navigate]);

  const getToken = () => localStorage.getItem('admin_token');

  const fetchVideos = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/videos`);
      const data = await response.json();
      setVideos(data);
    } catch (err) {
      console.error('Error fetching videos:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchContent = async () => {
    try {
      const [heroRes, aboutRes, contactRes] = await Promise.all([
        fetch(`${BACKEND_URL}/api/content/hero`),
        fetch(`${BACKEND_URL}/api/content/about`),
        fetch(`${BACKEND_URL}/api/content/contact`)
      ]);
      const heroData = await heroRes.json();
      const aboutData = await aboutRes.json();
      const contactData = await contactRes.json();

      if (heroData.data && Object.keys(heroData.data).length > 0) {
        setHeroContent(prev => ({ ...prev, ...heroData.data }));
      }
      if (aboutData.data && Object.keys(aboutData.data).length > 0) {
        setAboutContent(prev => ({ ...prev, ...aboutData.data }));
      }
      if (contactData.data && Object.keys(contactData.data).length > 0) {
        setContactContent(prev => ({ ...prev, ...contactData.data }));
      }
    } catch (err) {
      console.error('Error fetching content:', err);
    }
  };

  const handleSaveContent = async () => {
    setSavingContent(true);
    setContentMsg('');
    const token = getToken();
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };

    try {
      await Promise.all([
        fetch(`${BACKEND_URL}/api/content/hero`, {
          method: 'PUT', headers, body: JSON.stringify({ data: heroContent })
        }),
        fetch(`${BACKEND_URL}/api/content/about`, {
          method: 'PUT', headers, body: JSON.stringify({ data: aboutContent })
        }),
        fetch(`${BACKEND_URL}/api/content/contact`, {
          method: 'PUT', headers, body: JSON.stringify({ data: contactContent })
        })
      ]);
      setContentMsg('Cambios guardados correctamente');
    } catch (err) {
      setContentMsg('Error al guardar los cambios');
    } finally {
      setSavingContent(false);
      setTimeout(() => setContentMsg(''), 3000);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_username');
    navigate('/admin/login');
  };

  const handleSaveVideo = async (e) => {
    e.preventDefault();
    const token = getToken();
    const videoData = {
      ...videoForm,
      instruments: videoForm.instruments.split(',').map(i => i.trim())
    };

    try {
      const url = editingVideo
        ? `${BACKEND_URL}/api/videos/${editingVideo.id}`
        : `${BACKEND_URL}/api/videos`;
      const method = editingVideo ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method, headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(videoData)
      });

      if (response.ok) {
        fetchVideos();
        setShowVideoForm(false);
        setEditingVideo(null);
        setVideoForm({ title: '', description: '', youtube_id: '', duration: '', instruments: '' });
      }
    } catch (err) {
      console.error('Error saving video:', err);
    }
  };

  const handleEditVideo = (video) => {
    setEditingVideo(video);
    setVideoForm({
      title: video.title, description: video.description,
      youtube_id: video.youtube_id, duration: video.duration,
      instruments: video.instruments.join(', ')
    });
    setShowVideoForm(true);
  };

  const handleDeleteVideo = async (videoId) => {
    if (!window.confirm('¿Seguro que quieres eliminar este video?')) return;
    const token = getToken();
    try {
      await fetch(`${BACKEND_URL}/api/videos/${videoId}`, {
        method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchVideos();
    } catch (err) {
      console.error('Error deleting video:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/assets/logo.jpg" alt="Logo" className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-white">Panel de Administración</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm" data-testid="admin-username">
              {localStorage.getItem('admin_username')}
            </span>
            <Button onClick={handleLogout} variant="outline" size="sm" data-testid="logout-btn">
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="videos" className="space-y-6">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="videos" className="data-[state=active]:bg-red-600" data-testid="tab-videos">
              <Video className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-red-600" data-testid="tab-content">
              <FileText className="h-4 w-4 mr-2" />
              Contenido
            </TabsTrigger>
          </TabsList>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Gestión de Videos</h2>
              <Button
                onClick={() => {
                  setEditingVideo(null);
                  setVideoForm({ title: '', description: '', youtube_id: '', duration: '', instruments: '' });
                  setShowVideoForm(true);
                }}
                className="bg-red-600 hover:bg-red-700"
                data-testid="add-video-btn"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Video
              </Button>
            </div>

            {showVideoForm && (
              <Card className="bg-gray-800 border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {editingVideo ? 'Editar Video' : 'Nuevo Video'}
                </h3>
                <form onSubmit={handleSaveVideo} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Título *</label>
                    <Input value={videoForm.title} onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })} className="bg-gray-900 border-gray-600 text-white" required data-testid="video-title-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Descripción *</label>
                    <Textarea value={videoForm.description} onChange={(e) => setVideoForm({ ...videoForm, description: e.target.value })} className="bg-gray-900 border-gray-600 text-white" rows={3} required data-testid="video-desc-input" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">ID de YouTube *</label>
                      <Input value={videoForm.youtube_id} onChange={(e) => setVideoForm({ ...videoForm, youtube_id: e.target.value })} className="bg-gray-900 border-gray-600 text-white" placeholder="oZ1yeRvoo2s" required data-testid="video-ytid-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Duración *</label>
                      <Input value={videoForm.duration} onChange={(e) => setVideoForm({ ...videoForm, duration: e.target.value })} className="bg-gray-900 border-gray-600 text-white" placeholder="1 hora y media" required data-testid="video-duration-input" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Instrumentos * (separados por comas)</label>
                    <Input value={videoForm.instruments} onChange={(e) => setVideoForm({ ...videoForm, instruments: e.target.value })} className="bg-gray-900 border-gray-600 text-white" placeholder="Cante, Baile, Guitarra, Percusión" required data-testid="video-instruments-input" />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" className="bg-red-600 hover:bg-red-700" data-testid="save-video-btn">
                      {editingVideo ? 'Actualizar' : 'Crear'} Video
                    </Button>
                    <Button type="button" variant="outline" onClick={() => { setShowVideoForm(false); setEditingVideo(null); }}>
                      Cancelar
                    </Button>
                  </div>
                </form>
              </Card>
            )}

            <div className="space-y-4" data-testid="videos-list">
              {loading ? (
                <p className="text-gray-400">Cargando videos...</p>
              ) : videos.length === 0 ? (
                <p className="text-gray-400">No hay videos. Añade uno para empezar.</p>
              ) : (
                videos.map((video) => (
                  <Card key={video.id} className="bg-gray-800 border-gray-700 p-6">
                    <div className="flex gap-4">
                      <img src={video.thumbnail} alt={video.title} className="w-40 h-24 object-cover rounded" />
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white">{video.title}</h4>
                        <p className="text-gray-400 text-sm mt-1">{video.description}</p>
                        <div className="flex gap-4 mt-2 text-sm text-gray-500">
                          <span>{video.duration}</span>
                          <span>{video.instruments.join(', ')}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => handleEditVideo(video)} variant="outline" size="sm" data-testid={`edit-video-${video.id}`}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button onClick={() => handleDeleteVideo(video.id)} variant="outline" size="sm" className="text-red-500 hover:text-red-600" data-testid={`delete-video-${video.id}`}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Editar Contenido de la Web</h3>

              <div className="space-y-8">
                {/* Hero Section */}
                <div className="border-b border-gray-700 pb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Sección Principal (Hero)</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Título Principal</label>
                      <Input value={heroContent.title} onChange={(e) => setHeroContent({ ...heroContent, title: e.target.value })} placeholder="Arte Flamenco Para el Mundo" className="bg-gray-900 border-gray-600 text-white" data-testid="hero-title-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subtítulo 1</label>
                      <Input value={heroContent.subtitle1} onChange={(e) => setHeroContent({ ...heroContent, subtitle1: e.target.value })} placeholder="Espectáculos profesionales de flamenco tradicional español." className="bg-gray-900 border-gray-600 text-white" data-testid="hero-sub1-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subtítulo 2</label>
                      <Input value={heroContent.subtitle2} onChange={(e) => setHeroContent({ ...heroContent, subtitle2: e.target.value })} placeholder="Donde la pasión se convierte en arte." className="bg-gray-900 border-gray-600 text-white" data-testid="hero-sub2-input" />
                    </div>
                  </div>
                </div>

                {/* About Section */}
                <div className="border-b border-gray-700 pb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Sección "Sobre Nosotros"</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Título</label>
                      <Input value={aboutContent.title} onChange={(e) => setAboutContent({ ...aboutContent, title: e.target.value })} placeholder="Arte Flamenco Profesional" className="bg-gray-900 border-gray-600 text-white" data-testid="about-title-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subtítulo</label>
                      <Input value={aboutContent.subtitle} onChange={(e) => setAboutContent({ ...aboutContent, subtitle: e.target.value })} placeholder="Tradición andaluza para eventos internacionales" className="bg-gray-900 border-gray-600 text-white" data-testid="about-subtitle-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Descripción</label>
                      <Textarea value={aboutContent.description} onChange={(e) => setAboutContent({ ...aboutContent, description: e.target.value })} placeholder="Ofrecemos espectáculos de flamenco auténtico..." className="bg-gray-900 border-gray-600 text-white" rows={4} data-testid="about-desc-input" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Años de Experiencia</label>
                        <Input type="number" value={aboutContent.years} onChange={(e) => setAboutContent({ ...aboutContent, years: e.target.value })} placeholder="15" className="bg-gray-900 border-gray-600 text-white" data-testid="about-years-input" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Actuaciones</label>
                        <Input type="number" value={aboutContent.shows} onChange={(e) => setAboutContent({ ...aboutContent, shows: e.target.value })} placeholder="200" className="bg-gray-900 border-gray-600 text-white" data-testid="about-shows-input" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Países</label>
                        <Input type="number" value={aboutContent.countries} onChange={(e) => setAboutContent({ ...aboutContent, countries: e.target.value })} placeholder="30" className="bg-gray-900 border-gray-600 text-white" data-testid="about-countries-input" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-b border-gray-700 pb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Información de Contacto</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input type="email" value={contactContent.email} onChange={(e) => setContactContent({ ...contactContent, email: e.target.value })} placeholder="sarauproject@gmail.com" className="bg-gray-900 border-gray-600 text-white" data-testid="contact-email-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">YouTube URL</label>
                      <Input value={contactContent.youtube} onChange={(e) => setContactContent({ ...contactContent, youtube: e.target.value })} placeholder="https://youtube.com/..." className="bg-gray-900 border-gray-600 text-white" data-testid="contact-youtube-input" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button onClick={handleSaveContent} disabled={savingContent} className="bg-red-600 hover:bg-red-700" data-testid="save-content-btn">
                    {savingContent ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                    {savingContent ? 'Guardando...' : 'Guardar Todos los Cambios'}
                  </Button>
                  {contentMsg && (
                    <span className={`text-sm ${contentMsg.includes('Error') ? 'text-red-400' : 'text-green-400'}`} data-testid="content-save-msg">
                      {contentMsg}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
