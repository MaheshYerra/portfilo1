import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiFolder, FiMessageSquare, FiPlus, FiTrash2, FiEdit2 } from 'react-icons/fi';

const AdminDashboard = () => {
    // State
    const [activeTab, setActiveTab] = useState('projects');
    const [projects, setProjects] = useState([]);
    const [messages, setMessages] = useState([]);
    
    // Project Form State
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [projectForm, setProjectForm] = useState({
        title: '', description: '', techStack: '', githubLink: '', projectUrl: '', imageUrl: ''
    });

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        try {
            const [projRes, msgRes] = await Promise.all([
                axios.get('http://localhost:5000/api/projects'),
                axios.get('http://localhost:5000/api/contact')
            ]);
            setProjects(projRes.data);
            setMessages(msgRes.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        
        // Convert comma separated string to array for techStack
        const payload = {
            ...projectForm,
            techStack: projectForm.techStack.split(',').map(s => s.trim())
        };

        try {
            if (editingId) {
                await axios.put(`http://localhost:5000/api/projects/${editingId}`, payload);
            } else {
                await axios.post('http://localhost:5000/api/projects', payload);
            }
            setShowForm(false);
            setEditingId(null);
            setProjectForm({ title: '', description: '', techStack: '', githubLink: '', projectUrl: '', imageUrl: '' });
            fetchData();
        } catch (error) {
            console.error("Error saving project", error);
        }
    };

    const handleEdit = (proj) => {
        setEditingId(proj._id);
        setProjectForm({
            title: proj.title,
            description: proj.description,
            techStack: proj.techStack.join(', '),
            githubLink: proj.githubLink || '',
            projectUrl: proj.projectUrl || '',
            imageUrl: proj.imageUrl || ''
        });
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await axios.delete(`http://localhost:5000/api/projects/${id}`);
                fetchData();
            } catch (error) {
                console.error("Error deleting project", error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
            {/* Admin Header */}
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600">Admin Dashboard</div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-500">Public Admin Access</span>
                </div>
            </header>

            <div className="flex h-[calc(100vh-73px)]">
                {/* Sidebar */}
                <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4">
                    <nav className="space-y-2">
                        <button 
                            onClick={() => setActiveTab('projects')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'projects' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 font-medium' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                        >
                            <FiFolder /> Projects
                        </button>
                        <button 
                            onClick={() => setActiveTab('messages')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'messages' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 font-medium' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                        >
                            <FiMessageSquare /> Messages
                        </button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8 overflow-y-auto">
                    {activeTab === 'projects' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold">Manage Projects</h1>
                                <button 
                                    onClick={() => {
                                        setShowForm(!showForm);
                                        setEditingId(null);
                                        setProjectForm({ title: '', description: '', techStack: '', githubLink: '', projectUrl: '', imageUrl: '' });
                                    }}
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                                >
                                    {showForm ? 'Cancel' : <><FiPlus /> Add Project</>}
                                </button>
                            </div>

                            {showForm && (
                                <form onSubmit={handleProjectSubmit} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 space-y-4">
                                    <h3 className="text-lg font-semibold mb-4">{editingId ? 'Edit Project' : 'New Project'}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div><label className="block text-sm mb-1">Title</label><input required className="w-full p-2 rounded-lg border dark:border-slate-700 dark:bg-slate-800" value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} /></div>
                                        <div><label className="block text-sm mb-1">Image URL</label><input className="w-full p-2 rounded-lg border dark:border-slate-700 dark:bg-slate-800" value={projectForm.imageUrl} onChange={e => setProjectForm({...projectForm, imageUrl: e.target.value})} /></div>
                                        <div className="md:col-span-2"><label className="block text-sm mb-1">Description</label><textarea required rows="3" className="w-full p-2 rounded-lg border dark:border-slate-700 dark:bg-slate-800" value={projectForm.description} onChange={e => setProjectForm({...projectForm, description: e.target.value})} /></div>
                                        <div className="md:col-span-2"><label className="block text-sm mb-1">Tech Stack (comma separated)</label><input required placeholder="React, Node, MongoDB" className="w-full p-2 rounded-lg border dark:border-slate-700 dark:bg-slate-800" value={projectForm.techStack} onChange={e => setProjectForm({...projectForm, techStack: e.target.value})} /></div>
                                        <div><label className="block text-sm mb-1">GitHub Link</label><input className="w-full p-2 rounded-lg border dark:border-slate-700 dark:bg-slate-800" value={projectForm.githubLink} onChange={e => setProjectForm({...projectForm, githubLink: e.target.value})} /></div>
                                        <div><label className="block text-sm mb-1">Live URL</label><input className="w-full p-2 rounded-lg border dark:border-slate-700 dark:bg-slate-800" value={projectForm.projectUrl} onChange={e => setProjectForm({...projectForm, projectUrl: e.target.value})} /></div>
                                    </div>
                                    <button type="submit" className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">Save Project</button>
                                </form>
                            )}

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {projects.map(proj => (
                                    <div key={proj._id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="font-bold text-lg">{proj.title}</h3>
                                            <div className="flex gap-2">
                                                <button onClick={() => handleEdit(proj)} className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"><FiEdit2 /></button>
                                                <button onClick={() => handleDelete(proj._id)} className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"><FiTrash2 /></button>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{proj.description}</p>
                                        <div className="flex gap-2 flex-wrap text-sm">
                                            {proj.techStack.map(t => <span key={t} className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{t}</span>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'messages' && (
                        <div>
                            <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>
                            <div className="space-y-4">
                                {messages.map(msg => (
                                    <div key={msg._id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="font-bold">{msg.name}</h3>
                                            <span className="text-xs text-slate-400">{new Date(msg.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        <div className="text-sm text-blue-500 mb-4">{msg.email}</div>
                                        <p className="text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">{msg.message}</p>
                                    </div>
                                ))}
                                {messages.length === 0 && <p className="text-slate-500">No messages yet.</p>}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
