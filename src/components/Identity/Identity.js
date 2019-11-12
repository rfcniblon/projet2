import React from 'react';
import './identity.css';
//import '../fonts/fonts.css';

const signes = [
    {
        search: "mars",
        imagesigne: "./img/bélier.jpg",
        signe: "Bélier",
        imagestone: "imgzodiacs/pierres/hématite.jpeg",
        linestone: "Hématite",
        imageplanete: "imgzodiacs/planets/mars.jpg",
        lineplanete:"Mars",
        imageelement: "./imgzodiacs/elements/phoenix.jpg",
        lineelement: "Feu",
        planète: "Mars",
        textesigne: {
            titleSign: "Bélier",
            descriSign: "* Vous êtes une personne dynamique qui a sans cesse besoin de bouger. De nature impétueuse, vous avancez tambour battant, sans même vous retourner… mais vous faites rapidement machine arrière dès qu’un obstacle se présente et vous préférez tenter votre chance ailleurs. Indépendant et impulsif, vous avez bien du mal à contrôler vos emportements.Vous êtes une personne entière et passionnée qui adore être conquise mais qui préfère conquérir !",
            titlePlanet: "Votre Planète",
            descriPlanet: "* Votre planète est Mars ! Mars vit dans l’instant, il expérimente !Il adore la confrontation avec le monde, il se cogne souvent contre un mur, une chaise, ses gestes sont rapides, brusques, emportés. C’est un être direct, spontané qui n’a pas sa langue dans sa poche.Il sait très vite ce qu’il veut et il démarre au quart de tour, quitte à piquer une grosse colère si on se frotte à lui d’un peu trop près.",
            titleStone: "Votre Pierre",
            descriStone: "* De tempérament impulsif et sanguin, le signe du bélier est représenté par l’Hématite, encore appelée « pierre de sang » car celle-ci prend la couleur rouge lorsqu’elle est réduite en poudre. En effet, broyée finement puis mélangée à de l’eau, l’Hématite peut servir de pigment rouge, notamment utilisée dans l’art rupestre par nos ancêtres Homo Sapiens. Il est d’ailleurs fortement conseillé de la préserver de l’humidité vos bijoux sertis d’Hématites, sous peine de les voir rougir. Cette pierre fascinante qui peut passer de la couleur gris acier au rouge sang nous rappelle le caractère imprévisible des natifs de ce signe. Créatif et plein d'imagination, le bélier est aussi influencé par la planète Mars, planète sur laquelle on aurait trouvé de l’Hématite ! .",
            titleElement: "Votre élément zodiacal",
            descriElement:"* Les signes de Feu sont enthousiastes et francs. Cet élément donne aux natifs une fougue et une passion qui peut parfois devenir colère, violence, voire agressivité. Il convient donc de savoir maîtriser le feu, qui s'il est incontrôlable, peut devenir dangereux, mais donne aussi à ces signes, courage, volonté, ambition confiance en soi et désir de conquête. Comme le feu est l'élément de la purification, cette conquête peut aussi être une quête spirituelle, une élévation de l'âme.",       
        }
    },
    { 
        search: "venus",
        imagesigne: "./img/taureau.jpg",
        signe: "Taureau",
        imagestone: "imgzodiacs/pierres/emeraude.jpg",
        linestone: "Emeraude",
        imageplanete: "imgzodiacs/planets/venus.jpg",
        lineplanete:"Venus",
        imageelement: "imgzodiacs/elements/genbu.jpg",
        lineelement: "Terre",
        planète: "Venus",
        textesigne: {
            titleSign: "Taureau",
            descriSign: "Le Taureau aime les choses simples. Il aspire au calme et à la tranquillité. Terre à terre, lorsqu'il analyse les choses, il regarde les faits et rien d’autre ne retient son attention. Il a souvent tendance à s'entêter pour des choses qui n’ont pas d’importance mais lorsque quelque chose lui tient à cœur il fait tout pour y arriver.",
            titlePlanet: "Votre Planète",
            descriPlanet: "* Vénus est douée pour les relations, elle aime faire plaisir, elle est la collaboratrice idéale. Elle est enjouée quand elle se sent aimée mais c’est une catastrophe si on la repousse ! Ses réactions sont toujours affectives. Elle est toujours à la recherche de la beauté et de l’harmonie. ",
            titleStone: "Votre Pierre",
            descriStone: "* La pierre chance Taureau émeraude vous apporte de la richesse, de l’amour, de l’optimisme, de l’harmonie et de la prospérité. C’est une pierre chance Taureau qui vous défend contre les malchanceux et qui vous aider à remplir les espoirs. L’émeraude vous apporte de la fidélité, il augmente la fertilité et la facilité de naissance.",
            titleElement: "Votre élément zodiacal",
            descriElement:"* Pragmatiques et réalistes, les signes de Terre ont bien évidement, les pieds... sur terre. Signe de solidité, stabilité et persévérance, ces natifs sont concrets et ne reculent jamais, ils aiment aller au bout des choses, avec calme et résistance. Plutôt froids d'apparence, ils sont très sensuels et aiment autant les plaisirs terrestres que le confort et la sécurité matérielle. Attention aux fureurs longtemps retenues qui peuvent éclater en d’immenses colères.",  
        },
    },
    { 
        search: "mercure",
        imagesigne: "./img/gémeau.jpg",
        signe: "Gémeaux",
        imagestone: "imgzodiacs/pierres/jade.jpg",
        linestone: "Jade",
        imageplanete: "imgzodiacs/planets/mercure.jpg",
        lineplanete:"Mercure",
        imageelement: "imgzodiacs/elements/byakko.jpg",
        lineelement: "Air",
        planète: "Mercure",
        textesigne: {
            titleSign: "Gémeaux",
            descriSign: "Les Gémeaux sont des personnes communicatives  et intellectuelles qui savent comment exprimer leurs sentiments et leurs émotions. Ce sont des personnes sensibles, énergiques qui adorent les changements et les nouvelles expériences.Les Gémeaux ne prennent pas rapidement des décisions car ils préfèrent tout analyser. Ce sont des personnes sociables et diplomates qui veulent toujours avoir une relation harmonieuse et équilibrée.Ce sont des personnes actives et énergiques qui cherchent partout le partenaire idéal.  Parfois, les Gémeaux sont des personnes instables  et vivaces qui veulent tout expérimenter. Dans le couple, la chose la plus importante pour les Gémeaux est la communication.",
            titlePlanet: "Votre Planète",
            descriPlanet: "* Mercure est cérébral, il analyse et prend du recul avec les émotions, les sentiments dont il se méfie. Mais il adore blaguer et a plus d’un tour dans son sac. Même quand il est plus timide, il cherche à établir le contact… C’est un grand curieux, souvent habile. Il sait se faire pardonner quitte à changer son fusil d’épaule ! ",
            titleStone: "Votre Pierre",
            descriStone: "* Le Jade serait la pierre la plus bénéfique pour apporter un sentiment de paix. On l’apprécierait pour calmer l’hyperactivité et serait symbole de cœur, d’âme et d’esprit. Elle favoriserait la confiance en soi également et la liberté de penser.",
            titleElement: "Votre élément zodiacal",
            descriElement:"* L'Air est l'élément de la communication et des échanges, les signes d'air sont donc de grands bavards plutôt distraits, légers mais aussi vif, plein d'esprit et curieux. Insaisissable tout comme l'air, les natifs vont de droite à gauche, s'intéressent à mille et une choses, et ne parviennent que difficilement à se fixer. L'air favorise la raison, l'esprit et l'intelligence plutôt que la passion et l'émotion, ces signes semblent donc bien souvent manquer de profondeurs, ils sont superficiels. ",  
        },
    },
    { 
        search: "moon",
        imagesigne: "./img/cancer.jpg",
        signe: "Cancer",
        imagestone: "imgzodiacs/pierres/opale.jpg",
        linestone: "OPale",
        imageplanete: "imgzodiacs/planets/lune.jpg",
        lineplanete:"Lune",
        imageelement: "imgzodiacs/elements/shiryu.jpg",
        lineelement: "Eau",
        planète: "Moon",
        textesigne: {
            titleSign: "Cancer",
            descriSign: "Dans l’astrologie, le Cancer est un partenaire sensible et tenace qui a toujours besoin de la protection et de la stabilité.  La chose la plus importante pour le Cancer est d’avoir une bonne relation de couple et une bonne famille. C’est une personne émotive et romantique mais aussi naïve et timide.",
            titlePlanet: "Votre Planète",
            descriPlanet: "* La Lune est astre de douceur et de féminité ! Elle materne les autres, elle aime se montrer protectrice. Mais c’est aussi une planète « d’humeur » et parfois, c’est elle qui fait des caprices, en enfant immature. Quel paradoxe ! C’est une hypersensible qui réagit sur l’émotion, sans grand sang-froid. ",
            titleStone: "Votre Pierre",
            descriStone: "* L’opale est considérée comme une pierre de protection, qui amplifie les émotions et libère les blocages de son possesseur. Elle intercepte les énergies environnantes avec beaucoup de force. Si vous vous trouvez dans un milieu violent ou négatif, il vous serait impossible de garder une opale. En effet, elle renvoie une image de l’état d’esprit de son porteur.",
            titleElement: "Votre élément zodiacal",
            descriElement:"* L'Eau est l'élément des émotions, des sentiments et de la sensibilité. Ces signes sont secrets, émotifs, parfois hypersensibles, ils ont aussi une puissante intuition, même s'ils manquent profondément de réalisme. En effet, ils ont souvent beaucoup de mal à s'adapter à un monde qu'ils trouvent dur et trop matériel. Élément de la fécondité, les signes d'eau sont des créateurs, des artistes rêveurs et imaginatifs, bien que paresseux et velléitaires. Gentils et empathiques, s'ils sont blessés, ils peuvent vite devenir sournois et imprévisibles. ",  
        },
    },
    { 
        search: "sun",
        imagesigne: "./img/lion.jpg",
        signe: "Lion",
        imagestone: "imgzodiacs/pierres/topaze.jpeg",
        linestone: "Topaze",
        imageplanete: "imgzodiacs/planets/soleil.jpg",
        lineplanete:"Soleil",
        imageelement: "imgzodiacs/elements/phoenix.jpg",
        lineelement: "Feu",
        planète: "Sun",
        textesigne: {
            titleSign: "Lion",
            descriSign: "Gouverné par le Soleil, le Lion est une personne forte et généreuse qui veut toujours avoir l’admiration des autres.  C’est une personne créative qui veut atteindre ses objectifs mais aussi l’idéalisme et la perfection. Parfois, le Lion est une personne arrogante et orgueilleuse avec ses partenaires.",
            titlePlanet: "Votre Planète",
            descriPlanet: "* Le Soleil ne passe jamais inaperçu. Il fait tout pour attirer l’attention, il parle haut et fort, il gesticule, il veut briller. S’il soigne tant son image, s’il contrôle chacune de ses paroles, ce n’est pas par pur narcissisme. En fait, il est très sensible au regard d’autrui et il recherche constamment l’estime de son entourage.",
            titleStone: "Votre Pierre",
            descriStone: "* La topaze est considérée comme une pierre de souhait qui encourage le raisonnement, l’esprit créatif, l’ardeur, l’opulence, et le succès. Elle pourrait aider à supplanter l’indécision, à être plus sûr de soi, à être plus flegmatique. Elle peut aider à accomplir vos projets en activant votre motivation.",
            titleElement: "Votre élément zodiacal",
            descriElement:"* Les signes de Feu sont enthousiastes et francs. Cet élément donne aux natifs une fougue et une passion qui peut parfois devenir colère, violence, voire agressivité. Il convient donc de savoir maîtriser le feu, qui s'il est incontrôlable, peut devenir dangereux, mais donne aussi à ces signes, courage, volonté, ambition confiance en soi et désir de conquête. Comme le feu est l'élément de la purification, cette conquête peut aussi être une quête spirituelle, une élévation de l'âme.",  
        },
    },
    { 
        search: "mercure",
        imagesigne: "./img/vierge.jpg",
        signe: "Vierge",
        imagestone: "imgzodiacs/pierres/agathe.jpeg",
        linestone: "Agathe",
        imageplanete: "imgzodiacs/planets/mercure.jpg",
        lineplanete:"Mercure",
        imageelement: "imgzodiacs/elements/genbu.jpg",
        lineelement: "Terre",
        planète: "Mercure",
        textesigne: {
            titleSign: "Vierge",
            descriSign: "Dans l’astrologie, la Vierge indique une personne modeste, généreuse et critique dont la capacité d’analyse est bien développe. C’est une personne qui veut  avoir une vie simple et médiocre car la Vierge est une personne tranquille qui n’aime pas les changements ou les nouvelles expériences.",
            titlePlanet: "Votre Planète",
            descriPlanet: "* Mercure est cérébral, il analyse et prend du recul avec les émotions, les sentiments dont il se méfie. Mais il adore blaguer et a plus d’un tour dans son sac. Même quand il est plus timide, il cherche à établir le contact… C’est un grand curieux, souvent habile. Il sait se faire pardonner quitte à changer son fusil d’épaule !",
            titleStone: "Votre Pierre",
            descriStone: "* L’agate a le pouvoir d’instaurer un équilibre entre le corps et l’esprit en supprimant les blocages énergétiques. En garantissant une symbiose entre le physique et l’émotionnel, elle arrive à stabiliser l’aura et calme les inquiétudes, les anxiétés et les angoisses.",
            titleElement: "Votre élément zodiacal",
            descriElement:"* Pragmatiques et réalistes, les signes de Terre ont bien évidement, les pieds... sur terre. Signe de solidité, stabilité et persévérance, ces natifs sont concrets et ne reculent jamais, ils aiment aller au bout des choses, avec calme et résistance. Plutôt froids d'apparence, ils sont très sensuels et aiment autant les plaisirs terrestres que le confort et la sécurité matérielle. Attention aux fureurs longtemps retenues qui peuvent éclater en d’immenses colères.",  
        },
    },
    { 
        search: "venus",
        imagesigne: "./img/balance.jpg",
        signe: "Balance",
        imagestone: "imgzodiacs/pierres/saphir.jpg",
        linestone: "Saphir",
        imageplanete: "imgzodiacs/planets/venus.jpg",
        lineplanete:"Vénus",
        imageelement: "imgzodiacs/elements/byakko.jpg",
        lineelement: "Air",
        planète: "Venus",
        textesigne: {
            titleSign: "Balance",
            descriSign: "Le signe astrologique de la  Balance caractérise une personne diplomate et charmeuse dont la chose la plus importante est d’avoir une vie harmonieuse et équilibrée.  C’est une personne qui a toujours besoin d’être encouragée et parfois, la Balance est une personne incapable de prendre des décisions.",
            titlePlanet: "Votre Planète",
            descriPlanet: "* Vénus est douée pour les relations, elle aime faire plaisir, elle est la collaboratrice idéale. Elle est enjouée quand elle se sent aimée mais c’est une catastrophe si on la repousse ! Ses réactions sont toujours affectives. Elle est toujours à la recherche de la beauté et de l’harmonie.",
            titleStone: "Votre Pierre",
            descriStone: "* la pierre de naissance de septembre, le saphir et lié au signe astrologique de la balance. On accorde au saphir des vertus apaisantes et hautement spirituelles qui aideraient à la méditation notamment. Recherchant en permanence le juste équilibre, le port de saphir aidera les balances à se sentir plus en harmonie.",
            titleElement: "Votre élément zodiacal",
            descriElement:"* L'Air est l'élément de la communication et des échanges, les signes d'air sont donc de grands bavards plutôt distraits, légers mais aussi vif, plein d'esprit et curieux. Insaisissable tout comme l'air, les natifs vont de droite à gauche, s'intéressent à mille et une choses, et ne parviennent que difficilement à se fixer. L'air favorise la raison, l'esprit et l'intelligence plutôt que la passion et l'émotion, ces signes semblent donc bien souvent manquer de profondeurs, ils sont superficiels.",  
        },
    },
    { 
        search: "pluto",
        imagesigne: "./img/scorpion.jpg",
        signe: "Scorpion",
        imagestone: "imgzodiacs/pierres/grenat.jpg",
        linestone: "Grenat",
        imageplanete: "imgzodiacs/planets/pluton.jpg",
        lineplanete:"Pluton",
        imageelement: "imgzodiacs/elements/shiryu.jpg",
        lineelement: "Eau",
        planète: "Pluton",
        textesigne: {
            titleSign: "Scorpion",
            descriSign: "Dans l’astrologie, le Scorpion est une personne forte, raffinée, curieuse mais aussi jaloux et vindicatif. C’est une personne qui fascine les autres par l’intermédiaire de son mysticisme et de son mystère.",
            titlePlanet: "Votre Planète",
            descriPlanet: "* Personne complexe et très subtile, Pluton est charismatique. Pourtant il a souvent un côté autodestructeur. Il n’a pas peur de la différence ni des tabous. Il sait se mettre dans la peau des autres, il a un côté psy ou comédien. Absolutiste, il attend beaucoup de la vie !",
            titleStone: "Votre Pierre",
            descriStone: "* Le grenat est fréquemment regardé comme un minéral de transformation, et même de métamorphose. Il aurait le pouvoir de vous aider à surmonter les obstacles, à sublimer la passion amoureuse et à régénérer l’énergie sexuelle.",
            titleElement: "Votre élément zodiacal",
            descriElement:"* L'Eau est l'élément des émotions, des sentiments et de la sensibilité. Ces signes sont secrets, émotifs, parfois hypersensibles, ils ont aussi une puissante intuition, même s'ils manquent profondément de réalisme. En effet, ils ont souvent beaucoup de mal à s'adapter à un monde qu'ils trouvent dur et trop matériel. Élément de la fécondité, les signes d'eau sont des créateurs, des artistes rêveurs et imaginatifs, bien que paresseux et velléitaires. Gentils et empathiques, s'ils sont blessés, ils peuvent vite devenir sournois et imprévisibles.",  
        },
    },
    { 
        search: "jupiter",
        imagesigne: "./img/sagittaire.jpg",
        signe: "Sagittaire",
        imagestone: "imgzodiacs/pierres/peridot.jpg",
        linestone: "Peridot",
        imageplanete: "imgzodiacs/planets/jupiter.jpg",
        lineplanete:"Jupiter",
        imageelement: "imgzodiacs/elements/phoenix.jpg",
        lineelement: "Feu",
        planète: "Jupiter",
        textesigne: {
            titleSign: "Sagittaire",
            descriSign: "Le signe astrologique du Sagittaire indique une personne passionnelle, amicale et tolérante qui adore la liberté et les aventures. C’est une personne optimiste et confiante mais aussi arrogante et orgueilleuse. Le Sagittaire réussit à atteindre  ses objectifs grâce à son intuition mais aussi à son ambition.",
            titlePlanet: "Votre Planète",
            descriPlanet: "* Jupiter a l’art de fonctionner en groupe, il joue sur la complémentarité, il forme des équipes, il distribue des rôles. Il possède un grand sens pratique et il sait tirer parti de tout. On le dit opportuniste mais c’est surtout quelqu’un qui aime être efficace. Optimiste, il prend la vie du bon côté !",
            titleStone: "Votre Pierre",
            descriStone: "* Le Péridot possède la vertu de neutraliser la rancœur, d’affaiblir la jalousie et d’apaiser les excès de colère. Elle arrive même à assurer sérénité et paix intérieure à celui qui la porte.",
            titleElement: "Votre élément zodiacal",
            descriElement:"* Les signes de Feu sont enthousiastes et francs. Cet élément donne aux natifs une fougue et une passion qui peut parfois devenir colère, violence, voire agressivité. Il convient donc de savoir maîtriser le feu, qui s'il est incontrôlable, peut devenir dangereux, mais donne aussi à ces signes, courage, volonté, ambition confiance en soi et désir de conquête. Comme le feu est l'élément de la purification, cette conquête peut aussi être une quête spirituelle, une élévation de l'âme.",  
        },
    },
    { 
        search: "saturn",
        imagesigne: "./img/capricorne.jpg",
        signe: "Capricorne",
        imagestone: "imgzodiacs/pierres/onix.jpg",
        linestone: "Onyx",
        imageplanete: "imgzodiacs/planets/saturne.jpg",
        lineplanete:"Saturne",
        imageelement: "imgzodiacs/elements/genbu.jpg",
        lineelement: "Terre",
        planète: "Saturn",
        textesigne: {
            titleSign: "Capricorne",
            descriSign: "Dans l’astrologie, le Capricorne est une personne responsable, loyale et ambitieuse dont la chose la plus importante est de travailler pour avoir une bonne situation financière.",
            titlePlanet: "Votre Planète",
            descriPlanet: "* Saturne est rigoureux, il ne laisse rien au hasard, il est courageux et son travail est soigné. Sans être introverti, il éprouve intérieurement une certaine méfiance envers autrui et s’isole pour se ressourcer. Honnête et parfois exclusif, il déteste les « je t’aime » gratuits. Pour lui, les mots sont lourds de sens, il les emploie avec précision et sincérité. ",
            titleStone: "Votre Pierre",
            descriStone: "* L’onyx a le pouvoir de restituer votre confiance en vous, voire de la fortifier en vous permettant d’avoir un meilleur contrôle sur vous-même. Cette pierre aide à développer le sens des responsabilités. Il vous procure durant les moments les plus pénibles, confiance et soutien et vous aidera à évacuer les tensions mentales et/ou physiques.",
            titleElement: "Votre élément zodiacal",
            descriElement:"* Pragmatiques et réalistes, les signes de Terre ont bien évidement, les pieds... sur terre. Signe de solidité, stabilité et persévérance, ces natifs sont concrets et ne reculent jamais, ils aiment aller au bout des choses, avec calme et résistance. Plutôt froids d'apparence, ils sont très sensuels et aiment autant les plaisirs terrestres que le confort et la sécurité matérielle. Attention aux fureurs longtemps retenues qui peuvent éclater en d’immenses colères.",  
        },
    },
    { 
        search: "uranus",
        imagesigne: "./img/verseau.jpg",
        signe: "Verseau",
        imagestone: "imgzodiacs/pierres/améthiste.jpeg",
        linestone: "Améthyste",
        imageplanete: "imgzodiacs/planets/uranus.jpg",
        lineplanete:"Uranus",
        imageelement: "imgzodiacs/elements/byakko.jpg",
        lineelement: "Air",
        planète: "Uranus",
        textesigne: {
            titleSign: "Verseau",
            descriSign: "Le signe astrologique Verseau est un signe fixe de l’élément Air qui ne change pas facilement d’avis et dont la capacité intellectuelle et la capacité de communication sont bien développées. C’est une personne imprévisible et moderne, originale et créative. Le Verseau est une personne individualiste et active qui veut toujours avoir une bonne image devant les autres. Sur le plan sentimental, le Verseau est un partenaire instable mais aussi égocentrique. C’est une personne capable de comprendre les émotions ou les actions de son partenaire. Le Verseau est une personne généreuse et humanitaire   qui fait tout son possible pour aider ou pour encourager les personnes de son entourage.",
            titlePlanet: "Votre Planète",
            descriPlanet: "* Il connaît impeccablement son domaine, c’est un pionnier qui peut offrir au monde de belles inventions. En tout cas, il veut toujours faire avancer les choses et progresser. Individualiste, il ne s’encombre pas de personnes qui pourraient lui faire perdre du temps.",
            titleStone: "Votre Pierre",
            descriStone: "* L’améthyste purifie l’aura, favorise les rêves et l’intuition, en apaisant votre mental, vous serez capable d’analyser les messages de votre subconscient, ce minéral permet également le développement de la spiritualité.",
            titleElement: "Votre élément zodiacal",
            descriElement:"* L'Air est l'élément de la communication et des échanges, les signes d'air sont donc de grands bavards plutôt distraits, légers mais aussi vif, plein d'esprit et curieux. Insaisissable tout comme l'air, les natifs vont de droite à gauche, s'intéressent à mille et une choses, et ne parviennent que difficilement à se fixer. L'air favorise la raison, l'esprit et l'intelligence plutôt que la passion et l'émotion, ces signes semblent donc bien souvent manquer de profondeurs, ils sont superficiels.",  
        },
    },
    { 
        search: "neptun",
        imagesigne: "./img/poisson.jpg",
        signe: "Poisson",
        imagestone: "imgzodiacs/pierres/aigue-marine.png",
        linestone: "Aigue-Marine",
        imageplanete: "imgzodiacs/planets/neptune.jpg",
        lineplanete:"Neptune",
        imageelement: "imgzodiacs/elements/shiryu.jpg",
        lineelement: "Eau",
        planète: "Neptune",
        textesigne: {
            titleSign: "Poisson",
            descriSign: "Dans l’astrologie, le Poisson est une personne intuitive, romantique mais aussi sensible et émotive. C’est une personne occultiste dont la créativité et l’imagination sont bien développées. Parfois, le Poisson est une personne pessimiste et faible qui n’est pas capable d’atteindre ses objectifs. C’est une personne compréhensive, amicale er rêveuse. Le Poisson est une personne généreuse et c’est pour ça qu’elle est capable de faire des sacrifices ou des efforts pour aider les autres. Sur le plan professionnel, le Poisson est une personne confiante et consciente qui travaille bien en équipe. Dans ses relations amoureuses, les Poissons sont des partenaires sensuels et romantiques dont le partenaire idéal doit être une personne communicative et compréhensive.",
            titlePlanet: "Votre Planète",
            descriPlanet: "* Très adaptable, Neptune évolue, se transforme, il est très réceptif aux courants collectifs. L’inspiration et l’imagination sont deux de ses plus belles qualités. Il se sent éloigné des préoccupations matérielles et rationnelles. Il est plus intuitif qu’intellectuel. Dans ses relations il recherche un état fusionnel.",
            titleStone: "Votre Pierre",
            descriStone: "* L’aigue marine agit sur les angoisses et les anxiétés, en effet ses vibrations apaisantes permettent de calmer l’anxiété ainsi que les tensions nerveuses et émotionnelles en faisant place à la paix intérieure",
            titleElement: "Votre élément zodiacal",
            descriElement:"* L'Eau est l'élément des émotions, des sentiments et de la sensibilité. Ces signes sont secrets, émotifs, parfois hypersensibles, ils ont aussi une puissante intuition, même s'ils manquent profondément de réalisme. En effet, ils ont souvent beaucoup de mal à s'adapter à un monde qu'ils trouvent dur et trop matériel. Élément de la fécondité, les signes d'eau sont des créateurs, des artistes rêveurs et imaginatifs, bien que paresseux et velléitaires. Gentils et empathiques, s'ils sont blessés, ils peuvent vite devenir sournois et imprévisibles.",  
        },
    }
];

class Identity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: "https://apod.nasa.gov/apod/image/1910/MilkyWaySaltFlat_Huerta_960.jpg"
        };
    }

    // componentDidMount() {
    //     fetch("https://images-api.nasa.gov/search?q=" + signes[Number(this.props.signe)].search)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log("data: ", data.collection.items);
    //             let ran = Math.floor(Math.random() * data.collection.items.length);
    //             console.log("image: ", data.collection.items[ran].links[0].href);
    //             this.setState({ background: data.collection.items[ran].links[0].href });
    //         })
    // }

    render() {
        const { signe } = this.props;
        let info = {};
        if (signe === "0") {
            info = signes[0];
        } else if (signe === "1") {
            info = signes[1];
        }else if (signe === "2") {
            info = signes[2];
        }else if (signe === "3") {
            info = signes[3];
        }else if (signe === "4") {
            info = signes[4];
        }else if (signe === "5") {
            info = signes[5];
        }else if (signe === "6") {
            info = signes[6];
        }else if (signe === "7") {
            info = signes[7];
        }else if (signe === "8") {
            info = signes[8];
        }else if (signe === "9") {
            info = signes[9];
        }else if (signe === "10") {
            info = signes[10];
        }else if (signe === "11") {
            info = signes[11];
        }
        console.log("*******************", this.state.background);
        
        return (
            <div className="identity mob-12 tab-12 dsk-12" style={{backgroundImage: "url(" + this.state.background + ")"}}>
                <div className="head mob-12 tab-12 dsk-12">
                    <img className="imghead mob-3 tab-2 dsk-2" src={info.imagesigne} alt="" />
                    <h1 className="title1 mob-6 tab-5 dsk-3 ">Constellation du {info.signe}</h1>
                </div>
                <div className="indoor mob-12 tab-12 dsk-12">
                    <div className="theme mob-12 tab-12 dsk-12">
                        <div className="stone mob-4 tab-4 dsk-4">
                            <img className="imgstone" src={info.imagestone} alt="" />
                            <h2 className="title2">{info.linestone}</h2>
                        </div>
                        <div className="planet mob-4 tab-4 dsk-4">
                            <img className="imgplanet" src={info.imageplanete} alt="" />
                            <h2 className="title2">{info.lineplanete}</h2>
                        </div>
                        <div className="element mob-4 tab-4 dsk-4">
                            <img className="imgelement" src={info.imageelement} alt="" />
                            <h2 className="title2">{info.lineelement}</h2>
                        </div>
                    </div>

                    <hr />

                    <div className="about mob-12 tab-12 dsk-12">
                        <h3 className="sign mob-offset-1 mob-3 tab-offset-3 tab-6 dsk-offset-5 dsk-2">{info.textesigne.titleSign}</h3>
                        <p className="mob-offset-1 mob-10 tab-offset-1 tab-10 dsk-offset-1 dsk-10">{info.textesigne.descriSign}</p>
                        <h3 className="planet2 mob-offset-1 mob-6 tab-offset-3 tab-6 dsk-offset-5 dsk-2">{info.textesigne.titlePlanet}</h3>
                        <p className=" mob-offset-1 mob-10 tab-offset-1 tab-10 dsk-offset-1 dsk-10">{info.textesigne.descriPlanet}</p>
                        <h3 className="stone2 mob-offset-1 mob-9 tab-offset-3 tab-6 dsk-offset-5 dsk-2">{info.textesigne.titleStone}</h3>
                        <p className=" mob-offset-1 mob-10 tab-offset-1 tab-10 dsk-offset-1 dsk-10">{info.textesigne.descriStone}</p>
                        <h3 className="element2 mob-offset-1 mob-9 tab-offset-3 tab-6 dsk-offset-5 dsk-2">{info.textesigne.titleElement}</h3>
                        <p className=" mob-offset-1 mob-10 tab-offset-1 tab-10 dsk-offset-1 dsk-10">{info.textesigne.descriElement}</p>
                    </div>
                </div>
            </div>
        )
    }
};


export default Identity;


// const ident = {
//     background: 'mettre l API de la nasa',

//     front:{
//         armor: 'armorbélier',
//         police: 'mettre la police d écriture des constellations'
//     },
//     bandoattrib:{
//         imgstone: 'hématite',
//         imgplanet: 'mars',
//         imgelement: 'phoenix',
//     },
//     sign:{
//         name:'Bélier',
//         text:'* Vous êtes une personne dynamique qui a sans cesse besoin de bouger. De nature impétueuse, vous avancez tambour battant, sans même vous retourner… mais vous faites rapidement machine arrière dès qu’un obstacle se présente et vous préférez tenter votre chance ailleurs. Indépendant et impulsif, vous avez bien du mal à contrôler vos emportements.Vous êtes une personne entière et passionnée qui adore être conquise mais qui préfère conquérir !'
//     },
//     planet:{
//         name:'Votre Planète',
//         text:'* Votre planète est Mars ! Mars vit dans l’instant, il expérimente ! Il adore la confrontation avec le monde, il se cogne souvent contre un mur, une chaise, ses gestes sont rapides, brusques, emportés. C’est un être direct, spontané qui n’a pas sa langue dans sa poche. Il sait très vite ce qu’il veut et il démarre au quart de tour, quitte à piquer une grosse colère si on se frotte à lui d’un peu trop près.'
//     },
//     stone: {
//         name:'Votre pierre zodiacal',
//         text:'* De tempérament impulsif et sanguin, le signe du bélier est représenté par l’Hématite, encore appelée « pierre de sang » car celle-ci prend la couleur rouge lorsqu’elle est réduite en poudre. En effet, broyée finement puis mélangée à de l’eau, l’Hématite peut servir de pigment rouge, notamment utilisée dans l’art rupestre par nos ancêtres Homo Sapiens. Il est d’ailleurs fortement conseillé de la préserver de l’humidité vos bijoux sertis d’Hématites, sous peine de les voir rougir. Cette pierre fascinante qui peut passer de la couleur gris acier au rouge sang nous rappelle le caractère imprévisible des natifs de ce signe. Créatif et plein d imagination, le bélier est aussi influencé par la planète Mars, planète sur laquelle on aurait trouvé de l’Hématite ! .'
//     },
//     element: {
//         name: 'Votre élèment zodiacal',
//         text: '* Les signes de Feu sont enthousiastes et francs. Cet élément donne aux natifs une fougue et une passion qui peut parfois devenir colère, violence, voire agressivité. Il convient donc de savoir maîtriser le feu, qui si il est incontrôlable, peut devenir dangereux, mais donne aussi à ces signes, courage, volonté, ambition confiance en soi et désir de conquête. Comme le feu est l élément de la purification, cette conquête peut aussi être une quête spirituelle, une élévation de l âme.'
//     },
// }