"use client";

import { Book, MessageCircle, Shield, Wrench, Send } from "lucide-react";
import { useState } from "react";

export default function SupportPage() {
    const [chatOpen, setChatOpen] = useState(false);
    const [ticketForm, setTicketForm] = useState({
        name: "",
        email: "",
        subject: "",
        priority: "normal",
        message: ""
    });

    const handleTicketSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Ticket:", ticketForm);
        alert("Ticket créé ! Notre équipe vous répondra sous 48h.");
        setTicketForm({ name: "", email: "", subject: "", priority: "normal", message: "" });
    };

    const serviceCards = [
        {
            icon: Book,
            title: "Documentation & Manuels",
            description: "Guides complets, fiches techniques et documentation d'installation",
            cta: "Télécharger les manuels",
            files: [
                "Manuel utilisateur ECOMOVE-30.pdf",
                "Guide installation batterie LFP.pdf",
                "Schémas électriques.pdf",
                "Manuel maintenance.pdf"
            ]
        },
        {
            icon: Shield,
            title: "Garantie & SAV",
            description: "Informations sur les garanties et service après-vente",
            cta: "Voir les garanties",
            content: "Garantie de 3 à 5 ans selon les composants. SAV disponible dans toutes les grandes villes du Maroc."
        },
        {
            icon: Wrench,
            title: "Maintenance",
            description: "Conseils et planification de maintenance préventive",
            cta: "Planifier une maintenance",
            content: "Maintenance recommandée tous les 6 mois ou 5000 km. Forfaits maintenance disponibles."
        }
    ];

    const faqItems = [
        {
            q: "Comment contacter le support technique ?",
            a: "Par email à support@ecomove.ma, par téléphone au +212 670-268130 ou via le chat en bas à droite."
        },
        {
            q: "Quel est le délai de réponse du support ?",
            a: "Nous répondons en moyenne sous 4h en jours ouvrés, et sous 48h pour les tickets créés le week-end."
        },
        {
            q: "La garantie couvre-t-elle les pièces d'usure ?",
            a: "Les pièces d'usure normale (pneus, freins) ne sont pas couvertes. La batterie est garantie pour 5000 cycles minimum."
        },
        {
            q: "Des formations sont-elles disponibles ?",
            a: "Oui, nous proposons des formations à l'utilisation et à la maintenance de base pour tous nos clients B2B."
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Centre de support
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Trouvez des réponses, téléchargez des manuels ou contactez notre équipe
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Cards */}
            <section className="py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {serviceCards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div key={card.title} className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                                        <Icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                                    <p className="text-muted-foreground mb-6">{card.description}</p>

                                    {card.files && (
                                        <div className="space-y-2 mb-6">
                                            {card.files.map((file) => (
                                                <div key={file} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Book size={16} />
                                                    <span>{file}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {card.content && (
                                        <p className="text-sm text-muted-foreground mb-6">{card.content}</p>
                                    )}

                                    <button className="w-full py-2.5 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg font-semibold transition-all">
                                        {card.cta}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Questions fréquentes
                    </h2>
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <details key={index} className="group bg-card rounded-xl border border-border overflow-hidden">
                                <summary className="px-6 py-4 font-semibold cursor-pointer hover:bg-muted/50 transition-colors flex justify-between items-center">
                                    {item.q}
                                    <span className="text-primary">+</span>
                                </summary>
                                <div className="px-6 pb-4 text-muted-foreground">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ticket Form */}
            <section className="py-16">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Créer un ticket support
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Notre équipe vous répondra dans les plus brefs délais
                        </p>
                    </div>

                    <form onSubmit={handleTicketSubmit} className="bg-card p-8 rounded-2xl border border-border">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Nom *</label>
                                <input
                                    type="text"
                                    required
                                    value={ticketForm.name}
                                    onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Email *</label>
                                <input
                                    type="email"
                                    required
                                    value={ticketForm.email}
                                    onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Sujet *</label>
                                <input
                                    type="text"
                                    required
                                    value={ticketForm.subject}
                                    onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Priorité *</label>
                                <select
                                    required
                                    value={ticketForm.priority}
                                    onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="low">Basse</option>
                                    <option value="normal">Normale</option>
                                    <option value="high">Haute</option>
                                    <option value="urgent">Urgente</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2">Message *</label>
                            <textarea
                                required
                                value={ticketForm.message}
                                onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                                rows={6}
                                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Décrivez votre problème en détail..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-lg transition-all"
                        >
                            Créer le ticket
                        </button>
                    </form>
                </div>
            </section>

            {/* Chat Widget */}
            {chatOpen && (
                <div className="fixed bottom-24 right-8 w-96 h-[500px] bg-card rounded-2xl shadow-2xl border border-border flex flex-col z-50">
                    <div className="px-6 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-t-2xl flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <MessageCircle size={24} />
                            <div>
                                <p className="font-bold">Assistant ECOMOVE</p>
                                <p className="text-xs opacity-90">En ligne</p>
                            </div>
                        </div>
                        <button onClick={() => setChatOpen(false)} className="text-white hover:bg-white/20 rounded-full p-1">
                            ×
                        </button>
                    </div>
                    <div className="flex-1 p-6 overflow-y-auto bg-muted/20">
                        <div className="bg-white p-4 rounded-xl mb-4 shadow-sm">
                            <p className="text-sm">Bonjour ! Comment puis-je vous aider aujourd&apos;hui ?</p>
                        </div>
                    </div>
                    <div className="p-4 border-t border-border">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Tapez votre message..."
                                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Chat Button */}
            <button
                onClick={() => setChatOpen(!chatOpen)}
                className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center z-40"
            >
                <MessageCircle size={28} />
            </button>
        </div>
    );
}
