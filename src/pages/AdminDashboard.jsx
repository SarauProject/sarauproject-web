import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Plus, Edit, Trash2, LogOut, Video, FileText } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AdminDashboard = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingVideo, setEditingVideo] = useState(null);
  const [showVideoForm, setShowVideoForm] = useState(false);
  const navigate = useNavigate();

  const [videoForm, setVideoForm] = useState({
    title: '',
    description: '',
    youtube_id: '',
    duration: '',
    instruments: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchVideos();
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_username');
    navigate('/admin/login');
  };

  const handleSaveVideo = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('admin_token');
    
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
        method,
        headers: {
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
      title: video.title,
      description: video.description,
      youtube_id: video.youtube_id,
      duration: video.duration,
      instruments: video.instruments.join(', ')
    });
    setShowVideoForm(true);
  };

  const handleDeleteVideo = async (videoId) => {
    if (!window.confirm('¿Seguro que quieres eliminar este video?')) return;
    
    const token = localStorage.getItem('admin_token');
    
    try {
      await fetch(`${BACKEND_URL}/api/videos/${videoId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchVideos();
    } catch (err) {
      console.error('Error deleting video:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/assets/logo.jpg" alt="Logo" className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-white">Panel de Administración</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">
              {localStorage.getItem('admin_username')}
            </span>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="videos" className="space-y-6">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="videos" className="data-[state=active]:bg-red-600">
              <Video className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-red-600">
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
              >
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Video
              </Button>
            </div>

            {/* Video Form */}
            {showVideoForm && (
              <Card className="bg-gray-800 border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {editingVideo ? 'Editar Video' : 'Nuevo Video'}
                </h3>
                <form onSubmit={handleSaveVideo} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Título *
                    </label>
                    <Input
                      value={videoForm.title}
                      onChange={(e) => setVideoForm({...videoForm, title: e.target.value})}
                      className="bg-gray-900 border-gray-600 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Descripción *
                    </label>
                    <Textarea
                      value={videoForm.description}
                      onChange={(e) => setVideoForm({...videoForm, description: e.target.value})}
                      className="bg-gray-900 border-gray-600 text-white"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        ID de YouTube * (ej: kSFFakmetVM)
                      </label>
                      <Input
                        value={videoForm.youtube_id}
                        onChange={(e) => setVideoForm({...videoForm, youtube_id: e.target.value})}
                        className="bg-gray-900 border-gray-600 text-white"
                        placeholder="kSFFakmetVM"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Duración * (ej: 45 min)
                      </label>
                      <Input
                        value={videoForm.duration}
                        onChange={(e) => setVideoForm({...videoForm, duration: e.target.value})}
                        className="bg-gray-900 border-gray-600 text-white"
                        placeholder="45 min"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Instrumentos * (separados por comas)
                    </label>
                    <Input
                      value={videoForm.instruments}
                      onChange={(e) => setVideoForm({...videoForm, instruments: e.target.value})}
                      className="bg-gray-900 border-gray-600 text-white"
                      placeholder="Cante, Baile, Guitarra, Percusión"
                      required
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" className="bg-red-600 hover:bg-red-700">
                      {editingVideo ? 'Actualizar' : 'Crear'} Video
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowVideoForm(false);
                        setEditingVideo(null);
                      }}
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
              </Card>
            )}

            {/* Videos List */}
            <div className="space-y-4">
              {loading ? (
                <p className="text-gray-400">Cargando videos...</p>
              ) : videos.length === 0 ? (
                <p className="text-gray-400">No hay videos. Añade uno para empezar.</p>
              ) : (
                videos.map((video) => (
                  <Card key={video.id} className="bg-gray-800 border-gray-700 p-6">
                    <div className="flex gap-4">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-40 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white">{video.title}</h4>
                        <p className="text-gray-400 text-sm mt-1">{video.description}</p>
                        <div className="flex gap-4 mt-2 text-sm text-gray-500">
                          <span>{video.duration}</span>
                          <span>{video.instruments.join(', ')}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleEditVideo(video)}
                          variant="outline"
                          size="sm"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => handleDeleteVideo(video.id)}
                          variant="outline"
                          size="sm"
                          className="text-red-500 hover:text-red-600"
                        >
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
              <h3 className="text-xl font-semibold text-white mb-6">
                Editar Contenido de la Web
              </h3>
              
              <div className="space-y-8">
                {/* Hero Section */}
                <div className="border-b border-gray-700 pb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Sección Principal (Hero)</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Título Principal
                      </label>
                      <Input
                        placeholder="Arte Flamenco Para el Mundo"
                        className="bg-gray-900 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subtítulo 1
                      </label>
                      <Input
                        placeholder="Espectáculos profesionales de flamenco tradicional español."
                        className="bg-gray-900 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subtítulo 2
                      </label>
                      <Input
                        placeholder="Cante, baile, guitarra y percusión para eventos internacionales."
                        className="bg-gray-900 border-gray-600 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* About Section */}
                <div className="border-b border-gray-700 pb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Sección "Sobre Nosotros"</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Título
                      </label>
                      <Input
                        placeholder="Arte Flamenco Profesional"
                        className="bg-gray-900 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subtítulo
                      </label>
                      <Input
                        placeholder="Tradición andaluza para eventos internacionales"
                        className="bg-gray-900 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Descripción
                      </label>
                      <Textarea
                        placeholder="Ofrecemos espectáculos de flamenco auténtico..."
                        className="bg-gray-900 border-gray-600 text-white"
                        rows={4}
                      />
                    </div>
                    
                    {/* Estadísticas */}
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Años de Experiencia
                        </label>
                        <Input
                          type="number"
                          placeholder="15"
                          className="bg-gray-900 border-gray-600 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Actuaciones
                        </label>
                        <Input
                          type="number"
                          placeholder="200"
                          className="bg-gray-900 border-gray-600 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Países
                        </label>
                        <Input
                          type="number"
                          placeholder="30"
                          className="bg-gray-900 border-gray-600 text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-b border-gray-700 pb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Información de Contacto</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="sarauproject@gmail.com"
                        className="bg-gray-900 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Facebook URL (opcional)
                      </label>
                      <Input
                        placeholder="https://facebook.com/..."
                        className="bg-gray-900 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Instagram URL (opcional)
                      </label>
                      <Input
                        placeholder="https://instagram.com/..."
                        className="bg-gray-900 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        YouTube URL (opcional)
                      </label>
                      <Input
                        placeholder="https://youtube.com/..."
                        className="bg-gray-900 border-gray-600 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Imágenes */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Imágenes</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Logo Principal
                      </label>
                      <div className="flex items-center gap-4">
                        <img src="/assets/logo.jpg" alt="Logo actual" className="h-16 w-auto" />
                        <Input
                          type="file"
                          accept="image/*"
                          className="bg-gray-900 border-gray-600 text-white"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Formatos aceptados: JPG, PNG. Tamaño recomendado: 200x200px
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Imagen de Portada (Hero)
                      </label>
                      <div className="flex items-center gap-4">
                        <img src="/assets/portada.jpg" alt="Portada actual" className="h-24 w-auto" />
                        <Input
                          type="file"
                          accept="image/*"
                          className="bg-gray-900 border-gray-600 text-white"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Formatos aceptados: JPG, PNG. Tamaño recomendado: 1920x1080px
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-red-600 hover:bg-red-700">
                  Guardar Todos los Cambios
                </Button>
                
                <p className="text-sm text-gray-500">
                  💡 Tip: Esta funcionalidad guardará todos los cambios en la base de datos y se reflejarán inmediatamente en tu web.
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
