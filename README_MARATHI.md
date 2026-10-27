# Civilprep.ai — संपूर्ण प्रोग्राम फाईल्स (Vercel, Netlify व Local Server Ready)
**Assure Technologies, Kolhapur (`assuretech@gmail.com`)**

## Vercel एररचे निराकरण (`[PYTHON_ENTRYPOINT_NOT_FOUND]` Fixed):
- `app.py` मध्ये आता Vercel ला लागणारे टॉप-लेव्हल **`app`**, **`application`** आणि **`handler`** हे तिन्ही व्हेरिएबल्स (Entrypoints) जोडले आहेत.
- तसेच `requirements.txt` मधील जड लायब्ररी काढून टाकली आहे, ज्यामुळे आता Vercel वर २ सेकंदांत कोणतीही एरर न येता डिप्लॉयमेंट पूर्ण होईल.

## १. मुख्य वेब आणि सर्व्हर फाईल्स (Root Directory)
- `index.html` — संपूर्ण सिम्युलेटर असलेली मुख्य फाईल.
- `civilprep.html` — ब्राउझरमध्ये थेट उघडण्यासाठी मुख्य फाईलची प्रत.
- `app.py` — Vercel Serverless (`app`, `application`, `handler`) आणि Local Python Server फाईल.
- `requirements.txt` — Vercel Python साठी हलकी कॉन्फिगरेशन फाईल.
- `css/style.css` — स्टाईलशीट फाईल.
- `js/app.js` — संपूर्ण JavaScript कोड.
- `START_SERVER.bat` — Windows कॉम्प्युटरवर डबल-क्लिक करून थेट `http://localhost:8000` वर लोकल सर्व्हर सुरू करण्याची फाईल.
