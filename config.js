
// ============================================
// ⚙️ CONFIGURACIÓN DE LA PLANTILLA
// ============================================
// 
// 📝 INSTRUCCIONES:
// Este archivo controla TODO el contenido de tu sitio web de aniversario.
// Solo necesitas editar los textos, fechas y rutas de archivos aquí.
// NO necesitas tocar ningún otro archivo del proyecto.
//
// 💡 CONSEJOS:
// - Los textos entre comillas ("") pueden contener emojis
// - Las fechas deben estar en formato: "YYYY-MM-DD" (Año-Mes-Día)
// - Las rutas de archivos deben apuntar a la carpeta assets/
// - Puedes usar <br> para saltos de línea en los textos
// ============================================

const config = {
    // ============================================
    // 1️⃣ CONFIGURACIÓN GENERAL
    // ============================================
    // Este título aparecerá en la pestaña del navegador
    pageTitle: "Nuestro Medio Año Juntos ❤️",
    // Icono que aparece en la pestaña (puede ser .svg, .png, .ico)
    // Asegúrate de poner el archivo en la carpeta assets/
    favicon: "assets/favicon.svg",

    // ============================================
    // 2️⃣ MÚSICA DE FONDO
    // ============================================
    music: {
        // Ruta de tu canción favorita (debe estar en la carpeta assets/)
        // Formatos soportados: .mp3, .wav, .ogg
        path: "assets/cancion2.mp3", // 🔇 Déjalo vacío si no tienes música aún

        // Volumen de la música (0.0 = silencio, 1.0 = máximo)
        volume: 0.8,

        // ¿Reproducir automáticamente? (true = sí, false = no)
        autoPlay: true
    },

    // ============================================
    // 3️⃣ PANTALLA DE CARGA
    // ============================================
    loading: {
        // Mensaje que aparece en la pantalla de inicio
        message: "Algo especial te espera mi vida...",

        // Texto del botón para comenzar
        buttonText: "Comenzar ✨",

        // Texto de ayuda que aparece arriba del botón
        clickHint: "Haz clic para comenzar mi amor"
    },

    // ============================================
    // 4️⃣ SECCIÓN HERO (PANTALLA PRINCIPAL)
    // ============================================
    hero: {
        // Título principal que aparece al inicio
        title: "Nuestra historia de amor...",

        // ⚠️ IMPORTANTE: Fecha de inicio de tu relación (YYYY-MM-DD)
        // El contador calculará automáticamente el tiempo transcurrido
        // Ejemplo: "2024-09-13" para el 13 de septiembre de 2024
        startDate: "2025-03-01",

        // Texto que aparece después del contador
        finalText: "¡Y seguimos escribiendo nuestra historia juntos!",

        // Texto del indicador de scroll
        scrollText: "Desliza para continuar"
    },

    // ============================================
    // 5️⃣ LÍNEA DE TIEMPO (TU HISTORIA)
    // ============================================
    // Aquí cuentas tu historia en eventos cronológicos
    // Puedes agregar o eliminar eventos según necesites
    timeline: [
        // ========== EVENTO 1 ==========
        {
            // Título del evento (puedes usar emojis)
            title: "🌟 El primer encuentro",

            // Descripción del evento (puedes usar HTML como <br> para saltos de línea)
            content: `Todo comenzó por publicidad de un video que promocionaba una app para conocer gente a nivel mundial. La descargué por curiosidad, creé mi perfil y esperé, pero nadie contestaba. Poco a poco descubrí que muchas personas buscaban cosas feas y desagradables, decidí eliminarla, pero justo antes, me llegó un mensaje de una chica de nacionalidad Venezolana, entre a su perfil yme parecio muy simpática, que lo cambiaria todo mi mundo...<br><br>Desde ese momento, nuestras vidas se entrelazaron para algo mágico en mas adelante...`,

            // Imágenes del evento (opcional)
            // Puedes agregar varias imágenes separadas por comas
            images: [
                "assets/El_primer_encuentro.JPG",
                "assets/El_primer_encuentro2.JPG"
            ],

            // Videos del evento (opcional)
            // Descomenta la siguiente línea si quieres agregar videos
            // videos: ["assets/video1.mp4"],

            // Pie de foto o comentario adicional
            footer: "Ese día cambió todo en nuestras vidas..."
        },

        // ========== EVENTO 2 ==========
        {
            title: "💬 La primera conversación",
            content: `Recibí un mensaje de una chica llamada Madai. Entré a revisar su perfil y me pareció muy simpática y atractiva; su mensaje era un simple "HOLA". Yo le correspondí igualmente con un "HOLA, ¿QUÉ TAL?", a lo que ella contestó: "BIEN, ¿Y TÚ?". Desde ese entonces nos fuimos conociendo más y más, descubriendo de dónde era cada uno y cómo eran nuestras personalidades.<br><br>Nos bastó muy poco tiempo para sentir esa conexión y decidir pasarnos nuestras redes sociales, aunque seguimos hablando mucho por la app donde nos conocimos. Me hizo sentir a gusto, sintiendo que por fin había encontrado a alguien real entre tanto morbo, alguien que pensaba igual que yo. En ese momento la veía como una amiga y, aunque claramente me hubiera encantado que fuera de mi mismo país, no le puedo reprochar nada a la vida, ya que más adelante pasaría algo mucho más especial.<br><br>Hablábamos tanto, primero por Facebook y luego trasladamos esas lindas charlas a WhatsApp. No hacíamos videollamadas ni llamadas en ese entonces, puesto que no teníamos el tiempo o el lugar perfecto cada uno, pero siempre que conversaba con ella, sentía cómo, con el paso de los días, crecía de forma descomunal un enorme y gran amor por esa mujer.`,
            images: ["assets/La_primera_conversación.JPG"],
            footer: "Desde ese momento, no dejamos de hablar...."
        },

        // ========== EVENTO 3 ==========
        {
            title: "🎉 Oficialmente juntos",
            content: `Un 13 de septiembre del 2025, ya no era más que un sentimiento o un simple afecto; ya no eras para mí como una hermana o una amiga. Mi corazón ya había comenzado a sentir algo más que una amistad; quería que fuéramos algo más. Ya no te hablaba sin ponerme sonrojado o alegre, porque cuando hablaba contigo todo era distinto. Hiciste que te quiera, que te adore y que te ame; ya no quería que fueras mi amiga, quería que fueras mi enamorada.
            <br><br>Horas antes de declararme y confesar mi deseo de que fueras mi novia, tenía dudas y una sensación de miedo al rechazo, temiendo que no sintieras lo mismo y que tu respuesta fuera un "NO", perdiendo así toda la confianza y el cariño que teníamos. Sabía que vivimos en países diferentes, con culturas y religiones distintas; además, tener una relación a distancia no es valorada por muchos, pero mi corazón decidió apostar y arriesgarse a confesar este amor inmenso que me recorría.<br><br>Antes de llegar al momento, decidí hacerte un pequeño detalle para que fueras mía. Cuando llegó la hora, te escribí y hablamos de lo más normal mientras te lanzaba indirectas. Recordé cuando subí una foto de otra chica días antes y sentí que te pusiste celosa; querías que te presumiera y así lo hice: te pedí una foto para subirla. Entre risas e indirectas, te mostré unas imágenes que había hecho donde salíamos los dos como enamorados, describiendo a la mujer que hasta el día de hoy se sigue robando mi corazón.<br><br>Te mostré las imágenes y las eliminé rápidamente para ver si habías entendido lo que quería. Me di cuenta de que no te habías fijado bien, hasta que por fin me declaré: "Madai, eres una mujer espléndida y ya no siento solo una amistad. Cada vez que hablamos y reímos, mi corazón se acelera y me pongo rojito como tomate, como tú dices. Quiero que vayamos más allá, quiero que seas mi enamorada". Me quedé a la espera de una respuesta firme, aceptando que fuera un sí o un no. Estabas canalizando todo lo que te dije, hasta que tu respuesta fue un "SÍ".<br><br>No sabes cómo me sentí; mi corazón quería explotar de felicidad. Sonreí y me sonrojé como nunca. Hablamos, te dije "te amo" y tu respuesta fue un "Awww, te amo, amor". Estábamos en la misma sincronía desde que hablamos por primera vez. Me enamoraste totalmente; eres una mujer guerrera, luchadora, mi éxtasis y mi vicio. No puedo seguir adelante si no me acompañas en mi vida.<br><br><strong>'Aunque hoy nos separe un mapa, nos une el mismo cielo y este amor que no sabe de fronteras. No te elegí para que estuvieras cerca, te elegí porque a pesar de la distancia, eres la única que sabe hacerme sentir en casa.'</strong>`,
            images: ["assets/Oficialmente_juntos.JPG"],
            footer: "Nervios, risas y mariposas en el estómago"
        },

        // ========== EVENTO 4 ==========
        {
            title: "❤️ Nuestra conexión",
            content: `Desde el día que decidimos formalizar, nos prometimos muchas cosas como pareja, para ser mejores tanto para nosotros como para nuestras familias. Tú eres la mujer que me ilumina, la mujer que me levanta cada mañana. "¿Qué estará haciendo mi novia? ¿Cómo amaneció? ¿Se encuentra bien? ¿Habrá comido?". Me hago muchas preguntas e incógnitas, ¿y sabes por qué? Porque te amo y me preocupo por ti; a pesar de que estamos lejos, nada me impide estar pendiente de tu bienestar.Tal vez no soy tu primera pareja, ni tu primer beso, ni el primero que te dijo "amor", ni el primero que te robó el corazón...Pero lo que sí soy para ti es ese amor puro, sano; un amor unico. Tengamos o no problemas, siempre los solucionaremos. Para mí lo eres todo, Madai. Te robaste mi amor y llegaste a revolucionar mi vida por completo, haciéndome creer que todavía existe el "AMOR DE VERDAD". No estoy más que agradecido con Dios por darme a la gran mujer que tengo. Si me preguntas cómo no amarte, te diría que este amor recorre mis venas; eres mi obsesión, mi deseo y el éxtasis que tu me haces sentir.<br><br>
            Amor, Sé que tenemos días buenos y malos, como todos. A veces me guardo cosas, y no es porque no confíe en ti o no te ame, sino porque, como dicen, a veces el hombre calla, sufre, llora en silencio para proteger a esas personas que amas, lo que menos quiero es que las personas que mas amo ami alrededor sufran por mi, pero amor, tu si no te quedes callada me tienes, estoy para escucharte sea lo que sea, no te quiero ver triste, Jesús nunca se dejo intimidar por otros que ninguneban a él, asi no dejes que los comentarios de los demás, te quedan menos de dos años para que acabes tu carrera, y quiero que seas la mejor, quiero que cumplas todas tus metas, y yo estaré ahí para apoyarte en cada paso, en cada logro, en cada caída, en cada lágrima, en cada sonrisa, en cada momento de tu vida. Quiero ser tu compañero de vida, tu amigo, tu amante, tu confidente, tu todo.<br><br>
            Quizás no soy el mejor cantando ni bailando, pero quiero que seas la primera en todo para mí; quiero que seas la mujer especial. Enséñame todo, sé mi primer beso, abrázame, se mi primera y la ultima para mi, te esparare, no me importa esperar, llegara el tiempo, eres parte de mi,llegar hasta el dia que estemos cara a cara...Yo me mantengo en pie porque sé que, en el poquito tiempo que tenemos, tú me motivas a cumplir todas mis metas profesionales y personales. En un futuro no muy lejano, quiero que seas mi esposa, proponerte matrimonio, darte tu anillo, que seas la mujer escogida para pasar el resto de mi vida a tu lado. Verte en el altar con tu vestido, ya sea rojo, blanco o negro... ¡lo que tú quieras, amor!.Yo quizás con un terno rojo; como dicen por ahí, hay que ser distintos, hay que hacer deslumbrar al mundo con nuestras locuras, romper la matriz y crear nuevos capítulos juntos: convivir, viajar, gozar y planificar todo lo que soñamos para que, cuando seamos ancianitos, digamos:"Amor, cumplimos todo lo que soñamos". ¡Amor, cómo te amo! <br><br>Estoy aquí para ti, para sanar, reconstruir y revivir ese cariño que tal vez tengas escondido por malas experiencias. Intento ser mejor cada día por ti. Eres perfecta, amor, y para tu familia también lo eres. No dejes que tus ganas de vivir se apaguen porque alguien no acepte lo que vales. Tu único "defecto" es vivir en Venezuela, espero pronto podré alzarte y besarte apasionadamente sin parar, ver tu rostro, sentir tu labios, oir tus suspiros. Tu cuerpo es mi éxtasis y tu interior es el máximo esplendor de mi vida. Esta zona es para ti; para que cuando estés triste y yo no esté presente por algun motivo, entres aquí y veas que vales mucho más de lo que crees y de lo que creen.
            <br><br>Te amo mucho, mi amor, ¡de aquí hasta el infinito y más allá!`,
            images: ["assets/Nuestra_conexión.JPG"],

            // Campo "extra" para agregar más contenido al final del evento
            extra: `<br>Y desde entonces, cada día es una nueva aventura juntos.`
        },

        // 💡 CONSEJO: Puedes copiar y pegar este bloque para agregar más eventos:
        /*
        {
            title: "🎈 Título del evento",
            content: `Descripción del evento...`,
            images: ["assets/placeholder.svg"],
            footer: "Comentario adicional"
        },
        */
    ],

    // ============================================
    // 6️⃣ GALERÍA DE FOTOS
    // ============================================
    gallery: {
        // Título de la sección de galería
        title: "Nuestros momentos juntos favoritos",

        // Lista de fotos para la galería
        // Agrega tantas como quieras, separadas por comas
        images: [
            { url: "assets/Imagen1.JPG", caption: "Esas piernotas hermosas que me vuelven loco, esa sonrisa, DIOS PERO QUE MUJER😍" },
            { url: "assets/Imagen2.JPG", caption: "Mi cara de serio, pero por dentro estoy feliz de tenerte a mi lado ❤️" },
            { url: "assets/Imagen3.JPG", caption: "Seria, pero sabrosa mas que un chocolate 🍫" },
            { url: "assets/Imagen4.JPG", caption: "Con ojos de sueño, pero con un corazón despierto que late por ti 💓" },
            { url: "assets/Imagen5.JPG", caption: "Esa sonrisa que me derrite cada vez que la veo 😊" },
            { url: "assets/Imagen6.JPG", caption: "Mi cara de enamorado, por hambre de un chocolatito como tú 🍫" },
            { url: "assets/Imagen7.JPG", caption: "Besame mi amor, que tengo hambre de tu boca 😘" },
            { url: "assets/Imagen8.JPG", caption: "Dios si fuera flaco y musculoso, pero sali winny poo😅" },
            { url: "assets/Imagen9.JPG", caption: "Mi modelo y actriz favorita, aunque no lo sepa me vuelves loco 😎" },
            { url: "assets/Imagen10.JPG", caption: "El dia que nos veamos asi te abrazare fuerte" },
            { url: "assets/Imagen11.JPG", caption: "Me pase de picaro con esta foto, pero es que me encanta como sales 😍" },
            { url: "assets/Imagen12.JPG", caption: "Mi amor, mi chocolate, my teacher,mi vida, mi mundo, mi galaxia entera💖" }
        ]
            // Agrega más fotos aquí...
    },

    // ============================================
    // 7️⃣ MENSAJE FINAL
    // ============================================
    finalMessage: {
        // Mensaje de cierre (puedes usar <br> para saltos de línea)
        content: "Gracias por ser parte de mi vida ❤️<br>Te amo más cada día..."
    }
};

// ============================================
// ✅ ¡LISTO!
// ============================================
// Guarda este archivo y recarga tu navegador para ver los cambios.
// Recuerda colocar tus fotos, videos y música en la carpeta assets/
// ============================================
