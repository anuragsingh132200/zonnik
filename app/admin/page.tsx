"use client";

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Layout, FileText, Settings, LogOut, Search } from 'lucide-react';
import Link from 'next/link';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('properties');
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/properties');
            const data = await res.json();
            setProperties(data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this property?')) {
            try {
                await fetch(`/api/properties/${id}`, { method: 'DELETE' });
                fetchProperties();
            } catch (error) {
                console.error('Error deleting property:', error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-primary text-white flex flex-col">
                <div className="p-8 border-b border-white/10">
                    <Link href="/" className="text-2xl font-bold tracking-tighter">ZONIKK <span className="text-xs align-top bg-accent px-1 rounded">Admin</span></Link>
                </div>
                <nav className="flex-grow p-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('properties')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'properties' ? 'bg-accent text-white' : 'hover:bg-white/10'}`}
                    >
                        <Layout size={20} />
                        <span>Properties</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('content')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'content' ? 'bg-accent text-white' : 'hover:bg-white/10'}`}
                    >
                        <FileText size={20} />
                        <span>Site Content</span>
                    </button>
                    <button
                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <Settings size={20} />
                        <span>Settings</span>
                    </button>
                </nav>
                <div className="p-4 border-t border-white/10">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 text-red-400 transition-colors">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow overflow-auto">
                <header className="bg-white border-b border-border p-6 flex justify-between items-center sticky top-0 z-10">
                    <h2 className="text-2xl font-bold text-primary capitalize">{activeTab} Management</h2>
                    {activeTab === 'properties' && (
                        <button className="bg-accent text-white px-6 py-2 rounded-lg font-bold flex items-center space-x-2 hover:bg-opacity-90 transition-opacity">
                            <Plus size={20} />
                            <span>Add Property</span>
                        </button>
                    )}
                </header>

                <main className="p-8">
                    {activeTab === 'properties' ? (
                        <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
                            <div className="p-6 border-b border-border flex justify-between items-center">
                                <div className="relative w-96">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Search properties..."
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div className="flex space-x-2">
                                    <select className="bg-gray-50 border border-border rounded-lg px-4 py-2 text-sm">
                                        <option>All Types</option>
                                        <option>Warehouse</option>
                                        <option>Industrial Shed</option>
                                    </select>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 text-xs uppercase text-muted font-bold">
                                        <tr>
                                            <th className="px-6 py-4">Property</th>
                                            <th className="px-6 py-4">Location</th>
                                            <th className="px-6 py-4">Price</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {loading ? (
                                            <tr><td colSpan={5} className="text-center py-20 text-muted">Loading properties...</td></tr>
                                        ) : properties.length === 0 ? (
                                            <tr><td colSpan={5} className="text-center py-20 text-muted">No properties found. Add your first one!</td></tr>
                                        ) : properties.map((prop: any) => (
                                            <tr key={prop._id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="font-bold text-primary">{prop.title}</div>
                                                    <div className="text-xs text-muted">{prop.propertyType}</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-muted">{prop.location}</td>
                                                <td className="px-6 py-4 text-sm font-bold text-accent">₹{prop.price.toLocaleString()}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${prop.status === 'For sale' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                                        {prop.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex space-x-3">
                                                        <button className="text-muted hover:text-primary transition-colors"><Edit size={18} /></button>
                                                        <button onClick={() => handleDelete(prop._id)} className="text-muted hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm border border-border p-12 text-center">
                            <FileText size={48} className="mx-auto text-muted mb-4" />
                            <h3 className="text-xl font-bold text-primary mb-2">Content Management System</h3>
                            <p className="text-muted mb-8">Coming Soon: Edit website text, images, and testimonials directly.</p>
                            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold">Initialize CMS</button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;
