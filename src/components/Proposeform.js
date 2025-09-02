import React, { useState } from "react";

const LabelWithAsterisk = ({ label, required }) => (
  <label className="block text-sm font-medium text-gray-800 mb-1">
    {label}
    {required && <span className="text-red-500"> *</span>}
  </label>
);

const Proposeform = () => {
  const [formData, setFormData] = useState({
    artistName: '',
    trackTitle: '',
    youtubeOrSoundcloudLink: '',
    streamingLink: '',
    socialLink: '',
    email: '',
    mainStyle: '',
    mainMood: '',
    secondaryMood: '',
    energy: '',
    situation: '',
    keywords: []
  });

  const [keywordInput, setKeywordInput] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const styles = ["Rap / Trap / Drill", "Afro / World / Reggaeton", "Pop urbaine / R&B", "Électro / Club", "Techno / House / Hard", "Lofi / Chill / Ambiant", "Rock / Metal / Punk", "Alternatif / Expérimental", "Chanson / Variété", "Jazz / Soul / Funk", "Musique de film / BO", "Autre"];

  const moods = ["Mélancolie", "Chill", "Dansant", "Planant", "Détermination", "Réflexion", "Love"];

  const energies = ["Très calme", "Posée", "Rythmée", "Dynamique", "Énergique", "Explosive"];

  const situations = ["Nuit urbaine", "Route / conduite", "Fête / soirée", "Chagrin d'amour", "Marche seule", "Motivation / sport", "Fin de journée / sunset", "Pluie / introspection", "Matin calme", "Planant / espace"];

 const isValidUrl = (url, platforms = [], type = '') => {
  try {
    const parsed = new URL(url);
    const hostnameOk = platforms.length ? platforms.some(p => parsed.hostname.includes(p)) : true;
    if (!hostnameOk) return false;

    if (type === 'youtube') {
      const isWatchLink = parsed.hostname.includes('youtube.com') && parsed.pathname === '/watch';
      const isShortLink = parsed.hostname === 'youtu.be' && parsed.pathname.length > 1;
      return isWatchLink || isShortLink;
    }

    if (type === 'soundcloud') {
      const segments = parsed.pathname.split('/').filter(Boolean);
      return parsed.hostname.includes('soundcloud.com') && segments.length >= 2;
    }

    if (type === 'streaming') {
      // Vérifie la présence d’un identifiant de morceau dans le chemin
      const pathname = parsed.pathname.toLowerCase();
      return (
        pathname.includes('/track') ||
        pathname.includes('/album') ||
        pathname.includes('/watch') || // YouTube Music
        pathname.includes('/browse')   // Tidal
      );
    }

    return true;
  } catch {
    return false;
  }
};

  const validate = () => {
    const newErrors = {};
    if (!formData.artistName) newErrors.artistName = 'Nom requis';
    if (!formData.trackTitle) newErrors.trackTitle = 'Titre requis';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';
if (
  !formData.youtubeOrSoundcloudLink ||
  !(
    isValidUrl(formData.youtubeOrSoundcloudLink, ['youtube.com', 'youtu.be'], 'youtube') ||
    isValidUrl(formData.youtubeOrSoundcloudLink, ['soundcloud.com'], 'soundcloud')
  )
) {
  newErrors.youtubeOrSoundcloudLink = "Indique un lien direct vers une vidéo YouTube (ex: /watch?v=...) ou un morceau SoundCloud.";
}
 if (
  !formData.streamingLink ||
  !isValidUrl(
    formData.streamingLink,
    [
      'spotify.com',
      'deezer.com',
      'music.apple.com',
      'music.youtube.com',
      'music.amazon.com',
      'music.amazon.fr',
      'tidal.com'
    ],
    'streaming'
  )
) {
  newErrors.streamingLink = "Indique un lien direct vers un morceau en streaming (Spotify, Deezer, Apple Music, YouTube Music, etc.)";
}
    if (formData.socialLink && !isValidUrl(formData.socialLink)) {
      newErrors.socialLink = 'Lien réseau social invalide';
    }

    ['mainStyle', 'mainMood', 'secondaryMood', 'energy', 'situation'].forEach(field => {
      if (!formData[field]) newErrors[field] = 'Champ requis';
    });
    if (formData.keywords.length === 0) newErrors.keywords = 'Ajoute au moins un mot clé';

    return newErrors;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTagKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && keywordInput.trim()) {
      e.preventDefault();
      if (!formData.keywords.includes(keywordInput.trim())) {
        setFormData({
          ...formData,
          keywords: [...formData.keywords, keywordInput.trim()]
        });
        setKeywordInput('');
      }
    }
  };

  const removeKeyword = (word) => {
    setFormData({
      ...formData,
      keywords: formData.keywords.filter(k => k !== word)
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await fetch('https://n8n.atkmusic.fr/webhook-test/modération', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (res.ok) setSubmitted(true);
      } catch (err) {
        console.error('Erreur d\'envoi :', err);
      }
    }
  };

  if (submitted) {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-white"
      style={{ fontFamily: "'Pacifico', cursive", textAlign: 'center' }}
    >
      <p
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1f2937', // text-gray-800
          margin: '2rem',
        }}
      >
        🎶 Merci, ton son a été soumis avec succès !
      </p>
    </div>
  );
}

  return (
    <div
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl text-sm"
      style={{ 
        fontFamily: 'Arial, sans-serif',
        display: 'block' // Force le display block
      }}
    >
      <hr className="my-6" />
 <div className="space-y-4">
        <h3
  className="text-md font-semibold text-gray-800"
  style={{ textDecoration: 'underline' }}
>
  Informations sur l'artiste
</h3>
        </div>
      <div className="space-y-6">
        {["artistName", "trackTitle", "youtubeOrSoundcloudLink", "streamingLink", "socialLink", "email"].map(name => (
          <div 
            key={name} 
            className="w-full mb-4"
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              width: '100%' 
            }}
          >
            <LabelWithAsterisk
              label={{
                artistName: "Nom d'artiste",
                trackTitle: "Titre du morceau",
                youtubeOrSoundcloudLink: "Lien YouTube ou SoundCloud",
                streamingLink: "Lien streaming",
                socialLink: "Lien réseaux sociaux",
                email: "Email"
              }[name]}
              required={["artistName", "trackTitle", "youtubeOrSoundcloudLink", "streamingLink", "email"].includes(name)}
            />
            <input
              type={name === 'email' ? 'email' : 'text'}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
              style={{ width: '100%', display: 'block' }}
            />
            <div 
              className="text-sm mt-1 min-h-[1.25rem]" 
              style={{ 
                color: errors[name] ? '#e02424' : 'transparent',
                display: 'block',
                width: '100%'
              }}
            >
              {errors[name] || 'placeholder'}
            </div>
          </div>
        ))}
      </div>

      <hr className="my-6" />

      <div className="space-y-4">
        <h3
  className="text-md font-semibold text-gray-800"
  style={{ textDecoration: 'underline' }}
>Recherche par Mood</h3>
        <p className="text-gray-600 text-sm mb-4">C'est toi qui permets à l'outil de catégoriser ton morceau. Sois le plus précis possible dans tes réponses.</p>

        {[
          { name: 'mainStyle', label: 'Style principal', options: styles }, 
          { name: 'mainMood', label: 'Mood principal', options: moods }, 
          { name: 'secondaryMood', label: 'Mood secondaire', options: moods }, 
          { name: 'energy', label: 'Énergie', options: energies }, 
          { name: 'situation', label: 'Ambiance ou Situation', options: situations }
        ].map(({ name, label, options }) => (
          <div 
            key={name} 
            className="w-full mb-4"
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              width: '100%' 
            }}
          >
            <LabelWithAsterisk label={label} required={true} />
            <select
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
              style={{ width: '100%', display: 'block' }}
            >
              <option value="">— Sélectionner —</option>
              {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <div 
              className="text-sm mt-1 min-h-[1.25rem]" 
              style={{ 
                color: errors[name] ? '#e02424' : 'transparent',
                display: 'block',
                width: '100%'
              }}
            >
              {errors[name] || 'placeholder'}
            </div>
          </div>
        ))}

        <div 
          className="w-full"
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            width: '100%' 
          }}
        >
          <LabelWithAsterisk label="Mots clés" required={true} />
          <div className="flex flex-wrap gap-2 mb-2 mt-1" style={{ width: '100%' }}>
            {formData.keywords.map((word, index) => (
              <span key={index} className="bg-gray-200 px-2 py-1 rounded-full flex items-center">
                {word}
                <button type="button" onClick={() => removeKeyword(word)} className="ml-2 text-red-500">×</button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={keywordInput}
            onChange={e => setKeywordInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="Ajoute un mot clé et appuie sur Entrée ou ,"
            className="w-full p-2 border border-gray-300 rounded-md"
            style={{ width: '100%', display: 'block' }}
          />
          <div 
            className="text-sm mt-1 min-h-[1.25rem]" 
            style={{ 
              color: errors.keywords ? '#e02424' : 'transparent',
              display: 'block',
              width: '100%'
            }}
          >
            {errors.keywords || 'placeholder'}
          </div>
        </div>
      </div>

      <div className="text-right mt-8">
        <button 
          type="submit" 
          onClick={handleSubmit}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition cursor-pointer"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default Proposeform;