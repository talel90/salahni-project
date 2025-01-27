import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    additionalInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", { ...formData, selectedDate });
    alert("Votre réservation a été soumise avec succès !");
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">salahni</div>
        <nav className="nav">
          <a href="#">home</a>
          <a href="#">help</a>
        </nav>
        <div className="auth-buttons">
          <button>Log In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1></h1>
          <div className="search-bar">
            <input type="text" placeholder="How can we help?" />
            <input type="text" placeholder="Zip code" />
            <button>Search</button>
          </div>
        </section>

        {/* Icon Bar Section */}
        <section className="icon-bar">
          <div className="icon-item">
            <img src="/images/HandyPerson.svg" alt="Handyperson" />
            <span>Handyperson</span>
          </div>
          <div className="icon-item">
            <img src="/images/LandScaping.svg" alt="Landscaping" />
            <span>Landscaping</span>
          </div>
          <div className="icon-item">
            <img src="/images/Plumbing.svg" alt="Plumbing" />
            <span>Plumbing</span>
          </div>
          <div className="icon-item">
            <img src="/images/Electrical.svg" alt="Electrical" />
            <span>Electrical</span>
          </div>
          <div className="icon-item">
            <img src="/images/Remodeling.svg" alt="Remodeling" />
            <span>Remodeling</span>
          </div>
          <div className="icon-item">
            <img src="/images/Roof.svg" alt="Roofing" />
            <span>Roofing</span>
          </div>
          <div className="icon-item">
            <img src="/images/Painting.svg" alt="Painting" />
            <span>Painting</span>
          </div>
        </section>

        <section className="services">
          <h2>Recommended for you</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Handyman for Multiple Small Projects</h3>
              <button>Get quotes</button>
            </div>
            <div className="service-card">
              <h3>One Time Interior House Cleaning</h3>
              <button>Get quotes</button>
            </div>
            <div className="service-card">
              <h3>Plumbing</h3>
              <button>Get quotes</button>
            </div>
          </div>
        </section>

        <section className="popular-projects">
          <h2>Popular projects near you</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Decks & Porches</h3>
              <p>3.7 (1k) | from $1,890</p>
            </div>
            <div className="project-card">
              <h3>Home Cleaning</h3>
              <p>4.5 (314k) | from $85</p>
            </div>
            <div className="project-card">
              <h3>Roof Repair</h3>
              <p>4.7 (613k) | from $594</p>
            </div>
            <div className="project-card">
              <h3>Fence Repair</h3>
              <p>4.2 (4.8k) | from $380</p>
            </div>
          </div>
        </section>

        <section className="additional-services">
          <h2>Popular home projects</h2>
          <div className="home-projects-grid">
            <div className="project-card">
              <h3>Holiday Light Hanging</h3>
              <p>4.5 (6k) | from $195</p>
            </div>
            <div className="project-card">
              <h3>Handyperson for Small Projects</h3>
              <p>4.6 (599k) | from $158</p>
            </div>
            <div className="project-card">
              <h3>One-time Cleaning Service</h3>
              <p>4.5 (314k) | from $102</p>
            </div>
          </div>
        </section>

        <section className="maintenance">
          <h2>Keep your home in tip-top shape</h2>
          <div className="maintenance-grid">
            <div className="service-card">
              <h3>Faucet & Plumbing Repair Services</h3>
              <p>4.6 (568k) | from $226</p>
            </div>
            <div className="service-card">
              <h3>Roof Installation & Repair</h3>
              <p>4.7 (325k) | from $471</p>
            </div>
            <div className="service-card">
              <h3>Bathroom Remodel</h3>
              <p>4.4 (180k) | from $2,500</p>
            </div>
          </div>
        </section>

        {/* Book a Service Section */}
        <section className="book-service">
          <h2>Réserver un service</h2>
          <Card className="shadow-lg">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium mb-1">Choisir un service</label>
                  <Select
                    name="service"
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                    required
                  >
                    <SelectItem value="Plomberie">Plomberie</SelectItem>
                    <SelectItem value="Électricité">Électricité</SelectItem>
                    <SelectItem value="Ménage">Ménage</SelectItem>
                    <SelectItem value="Jardinage">Jardinage</SelectItem>
                  </Select>
                </div>

                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Nom complet</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Téléphone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Address Input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Adresse</label>
                  <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Additional Info Input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Informations supplémentaires</label>
                  <Textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <Calendar
                    onChange={(date) => setSelectedDate(date)}
                    value={selectedDate}
                    required
                  />
                </div>

                <Button type="submit" className="mt-4 w-full">
                  Réserver maintenant
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="footer">
        <p>Copyright © 2025. Angi Clone by React</p>
      </footer>
    </div>
  );
}

export default App;
