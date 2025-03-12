# Aplicación de Componentes Ionic 6 y Angular 16

Este repositorio contiene una aplicación desarrollada con **Ionic 6** y **Angular 16**, con soporte para **PWA** y despliegue en **Firebase Hosting**.

---

## 🚀 Instalación

1. **Clonar el repositorio**  
   ```sh
   git clone
   ```
2. **Instalar dependencias**  
   ```sh
   npm install
   ```
3. **Levantar el servidor de desarrollo**  
   ```sh
   ionic serve
   ```
   Verifica que la aplicación funciona correctamente y detén el servidor antes de continuar.

---

## 🌐 Convertir la Aplicación en PWA

### ⚡ Pasos previos:
- Debes haber creado un proyecto en Firebase:  
  👉 [Firebase Console](https://console.firebase.google.com/)
- Video de apoyo:  
  🎥 [Cómo convertir una app Ionic en PWA](https://youtu.be/f118CiCiOdc?si=VIN7aP-p2K-lGfwr)

### 🛠️ Pasos para la configuración:
1. Agregar soporte para PWA:
   ```sh
   ng add @angular/pwa@16
   ```
2. Construir la aplicación con Service Worker:
   ```sh
   ionic build --prod --service-worker
   ```
3. Instalar Firebase CLI:
   ```sh
   npm install -g firebase-tools
   ```
   **(Reinicia el proyecto para que Firebase CLI sea detectado)**
4. Iniciar sesión en Firebase:
   ```sh
   npx firebase login
   ```
   **(Debe mostrar el correo con el que se creó el proyecto en Firebase)**
5. Inicializar Firebase Hosting:
   ```sh
   firebase init
   ```
   **Configuración recomendada:**
   - Public directory: `public`
   - Single-page app (rewrite all URLs to `/index.html`)? **No**
   - Set up automatic builds and deploys with GitHub? **No**
6. Desplegar la aplicación en Firebase:
   ```sh
   firebase deploy
   ```

### 🌟 Despliegue completado:
- **Consola del Proyecto Firebase:**  
  [Firebase Console](https://console.firebase.google.com/project/ionic-pwa-3bbaf/overview)
- **URL de Hosting:**  
  [https://ionic-pwa-3bbaf.web.app](https://ionic-pwa-3bbaf.web.app)

---

💪 **Disfruta de tu aplicación PWA con Firebase!**

