import React, { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = `
     <div style="background: #eee; padding: 30px; border-radius: 16px;">
      <form id="contact-form" style="display:flex;flex-direction:column;gap:12px;max-width:500px;margin:0 auto;">
        <input type="text" name="email" placeholder="Ton email (optionnel)" style="padding:12px;border:1px solid #ccc;border-radius:8px;" />
        <select name="sujet" style="padding:12px;border:1px solid #ccc;border-radius:8px;">
          <option value="avis">Donner un avis</option>
          <option value="bug">Signaler un bug</option>
          <option value="autre">Autre</option>
        </select>
        <textarea name="message" placeholder="Ton message..." required style="padding:12px;min-height:120px;border:1px solid #ccc;border-radius:8px;"></textarea>
        <button type="submit" style="padding:12px;background:#000;color:#fff;border:none;border-radius:8px;cursor:pointer;">Envoyer</button>
      </form>
      <div id="contact-feedback" style="margin-top:20px;text-align:center;font-weight:bold;"></div>
    `;

    const form = ref.current.querySelector("#contact-form");
    const feedback = ref.current.querySelector("#contact-feedback");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      feedback.innerHTML = "⏳ Envoi en cours...";
      const email = form.email.value;
      const sujet = form.sujet.value;
      const message = form.message.value;

      const res = await fetch("https://n8n.atkmusic.fr/webhook/f6cd4e6a-f498-456f-bd6d-531737778acb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa("admin:LOrenzOmOOd!")
        },
        body: JSON.stringify({ email, sujet, message })
      });

      const txt = await res.text();

      if (res.ok) {
        form.reset();
        feedback.innerHTML = "✅ Merci, ton message a bien été envoyé !";
        setSuccess(true);
      } else {
        feedback.innerHTML = "❌ Une erreur est survenue. Réessaie plus tard.";
        setError(txt);
      }
    });
  }, []);

  return (
    <section style={{ padding: "30px 20px", background: "#f9f9f9", textAlign: "center", borderRadius: "16px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Une remarque ? Un bug ? Un message ?</h2>
        <p style={{ color: "#555" }}>
          Dis-nous ce que tu penses, signale un problème ou envoie un message directement ici.
        </p>
      </div>
      <div ref={ref} />
      <div ref={containerRef} />
    </section>
  );
};

export { ContactSection };