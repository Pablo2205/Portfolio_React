import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiC, SiExpress,SiMongodb} from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";


export const menu = [
    {name:"About"},
    {name:"Services"},
    {name:"Skill"},
    {name:"Projects"},
//    {name:"Testimonial"},
    {name:"Contact"},
]

export const projects = [
    { 
      id:1,
      title: 'SmartSet Project',
      image: '/images/projectsImages/smartset.png',
      category:"Engineering",
      data:{
         description: `Participacion de un importante proyecto dentro del area de la ingenieria del IoT, se implemento un producto tecnologico el cual autogestiona las telecom unicaciones del medio fidico del consumo energetico de medidores monofasico y trifasicos,
                        el mismo es capar de realizar un motinoreo exacto de la red de suministro asi como las variables fisiscas, el mismo crea una red BLE Mesh y Thread para comunicaciones PAN y se acopla a una red LAN/WAN mas ambplia mediante el uso de LTE 5G y NBIoT
                        En su mínima expresión SmartSET despliega una red inalámbrica de alcance local que le permite colectar información de los sensores asociados a una sub estación transformadora de distribución 
                        De este modo se adquieren la totalidad de los parámetros eléctricos (Energía, potencia, tensión, corrientes, THD, etc) en los bornes de salida del transformador, la temperatura del aceite refrigerante, la temperatura y humedad ambiente, la totalidad de los parámetros eléctricos en cada salida de la SET 
                        Toda esta información es colectada por una unidad integral de gestión (UIG) que la almacena en una base de datos local, la organizada por grupo de sensores y guarda registro temporal de cada dato adquirido.  
                        Para facilitar el acceso a esta información SmartSET cuenta con una página web embebida a la que se puede acceder localmente con cualquier dispositivo móvil mediante una conexión WiFi. Esto permite a los operarios de mantenimiento contar con información del estado actual de la SET así como también evaluar los registros históricos del sistema.  `,
         demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"C++",
          svgIcon: "/images/c++.svg",
          iconColor: "skyblue",
        },
        {
          name:"Raspberry Pi",
          svgIcon: "/images/raspberry.svg",
        },
        {
          name:"Linux",
          svgIcon: "/images/linux.svg",
        },
        {
          name:"MySQl",
          svgIcon: "/images/mysql.svg",
        },
      ]
    },
    {
      id:2,
      title: 'UAS THT',
      image: '/images/projectsImages/THT.jpg',
      category:"Engineering",
      data:{
        description:`La unidad de medición de Humedad y temperatura es un módulo pensado para adquisición de información ambientales del entorno del trasformador de distribución. Esta unidad se basa en la tecnología “Microelectromechanical Systems” o MEMs por sus siglas en inglés para adquirir y registrar la temperatura y humedad ambiente. Cuenta también con un puerto para conexión de una sonda PT100 remota que permite conocer la temperatura del aceite refrigerante del transformador. La sonda MEMs transmite la información a la unidad en forma digital por lo que se puede intercambiar libremente por otras de la misma tecnología sin requerir ajuste alguno. Respecto de la sonda PT100 al amplificar de señal interno utiliza la configuración de 3 hilos para compensar automáticamente el largo del cable utilizado en la instalación. Por ultimo este módulo también cuenta con conectividad Bluetooth y NFC para permitir su integración a la plataforma Smart-SET. `,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"PCB Design",
          svgIcon: "/images/circuit.svg",
        },
        {
          name:"ST MIC",
          svgIcon: "/images/st.svg",

        },
        {
          name:"Python",
          svgIcon: "/images/python.svg",
        },
        {
          name:"Wireless",
          svgIcon: "/images/esp.svg",
        },
      ]
    },
    {
      id:3,
      title: 'UPS Microelectronics',
      image: '/images/projectsImages/UPS.jpg',
      category:"Engineering",
      data:{
        description: `Sistema de alimentación ininterrumpida capaz de sostener alimentación de energía a un SBC (ej: Raspberry) y los elementos accesorios durante la ausencia de tensión de alimentación primaria. Supervisión de operación de HOST, funcionando como un “WatchDOG”. Siendo este dispositivo el responsable de realizar un “HardReset” del SBC en caso de considerar que el mismo se encuentra fuera de servicio. 
        Dentro del Sistema Smart Set se encarga de garantizar el correcto suministro de energía y supervisar a los módulos TEA y UIG. Puede usarse en otros sistemas industriales como sistema de alimentación ininterrumpida con montaje para riel DIN. `,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"PCB Design",
          svgIcon: "/images/circuit.svg",
        },
        {
          name:"ST MIC",
          svgIcon: "/images/st.svg",

        },
        {
          name:"Python",
          svgIcon: "/images/python.svg", 
        },
        {
          name:"Wireless",
          svgIcon: "/images/esp.svg",
        },
      ]
    },
    {
      id:4,
      title: 'TEA for SmartSet',
      image: '/images/projectsImages/TEA.jpg',
      category:"Engineering",
      data:{
        description: `La Unidad de Medición de Transformador de Energía (TEA) es un módulo pensado para adquisición de información eléctrica del transformador de distribución. 
        Esta unidad se basa en la tecnología “Microelectromechanical Systems” o MEMs por sus siglas en inglés para adquirir y registrar la temperatura y humedad ambiente. 
        uenta también con un puerto para conexión de una sonda PT100 remota que permite conocer la temperatura del aceite refrigerante del transformador`,
        },
      demoLink: "https://google.com/",
      stack:[
        {
          name:"PCB Design",
          svgIcon: "/images/circuit.svg",
        },
        {
          name:"ST MIC",
          svgIcon: "/images/st.svg",

        },
        {
          name:"Python",
          svgIcon: "/images/python.svg",
        },
        {
          name:"Wireless",
          svgIcon: "/images/esp.svg",
        },
      ]
    },
    {
      id:5,
      title: 'POW for SmartSet',
      image: '/images/projectsImages/POW.jpg',
      category:"Engineering",
      data:{
        description: `POW es parte de un sistema de tele medición compuesto por sensores y sistemas de comunicación que puede funcionar como un módulo independiente en otros tipos de sistemas e instalaciones como una fuente de alimentación con la característica principal de que posee un rango de operación muy amplio (60-440Vca). 
        Su principal funcion es la de proveer de energía a las distintas partes del sistema Smart Set: UIG, TEA y UAS de Temperatura y humedad `,
        },
      demoLink: "https://google.com/",
      stack:[
        {
          name:"PCB Design",
          svgIcon: "/images/circuit.svg",
        },
        {
          name:"ST MIC",
          svgIcon: "/images/st.svg",

        },
        {
          name:"Python",
          svgIcon: "/images/python.svg",
        },
        {
          name:"Wireless",
          svgIcon: "/images/esp.svg",
        },
      ]
    },
    {
      id:6,
      title: 'Smart Waste Sorter',
      image: '/images/projectsImages/electronic.png',
      category:"Engineering",
      data:{
        description: `Sistema de clasificación de residuos electrónicos, 
        El sistema se basa en la utilización de una red de sensores los cuales miden las propiedades fisicas de los residuos y ayudan a la determinacion del objeto que se esta clasificando.
        El sistema es capaz de clasificar los residuos en 4 categorías, metales, plásticos, papeles y vidrios.
        El sistema es capaz de clasificar los residuos en tiempo real y de forma autónoma.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"C++",
          svgIcon: "/images/c++.svg",
        },
        {
          name:"Arduino",
          svgIcon: "/images/arduino.svg",
        },
        {
          name:"Espressift",
          svgIcon: "/images/esp.svg",
        },
        {
          name:"Raspberry Pi",
          svgIcon: "/images/raspberry.svg",
        },
      ]    
    },
    {
      id:7,
      title: 'Wheater App',
      image: '/images/projectsImages/WheaterApp.png',
      category:"Development",
      data:{
        description: `Programa web capaz de mostrar el clima actual de una ciudad, con la posibilidad de ver el clima de los proximos 5 dias, con la posibilidad de ver la temperatura, humedad, viento, y la probabilidad de lluvia.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"HTML 5",
          svgIcon: "/images/html5.svg",
        },
        {
          name:"CSS 3",
          svgIcon: "/images/css.svg",
        },
        {
          name:"Java Script",
          svgIcon: "/images/javascript.svg",
        }
      ]
    },
   {
      id:8,
      title: 'Password Generator',
      image: '/images/projectsImages/PasswordGenerate.png',
      category:"Development",
      data:{
        description: `Programa web para la generacion aleatoria de claves seguras pudiendo elegir la complejidad de la misma mediante la seleccion de longitud de la misma y los caracteres a utilizar. A su vez facilita el copiado al portapapeles del usuario,`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Python",
          svgIcon: "/images/python.svg",
        },
      ]
    }, 
    {
      id:9,
      title: 'Cientific Calculator',
      image: '/images/projectsImages/Calculator.png',
      category:"Development",
      data:{
        description: `Un sencillo pero eficiente programa de calculadora cientifica, con todas las funciones basicas de una calculadora cientifica, con la posibilidad de realizar operaciones basicas.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"HTML 5",
          svgIcon: "/images/html5.svg",
        },
        {
          name:"CSS 3",
          svgIcon: "/images/css.svg",
        },
        {
          name:"Java Script",
          svgIcon: "/images/javascript.svg",
        }
      ]
    },
    
    {
      id:10,
      title: 'Veeam Backup for Microsoft 365',
      image: '/images/projectsImages/veeam365-flow.png',
      category:"Infrastructure",
      data:{
        description: `Implementacion del orquestador mas importante a nivel mundial dentro del area de Backup y restauraciones, 
        utilizando Veeam Backup for Microsoft 365 como el orquestador central para la gestion de backups y restauraciones de las aplicaciones de Microsoft 365 dentro de un entorno empresarial con mas de 150 usuarios.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Veeam",
          svgIcon: "/images/veeam_logo2.svg",
        },
        {
          name:"Office 365",
          svgIcon: "/images/microsoft.svg",
        },
        {
          name:"Azure",
          svgIcon: "/images/azure.svg", 
        }
      ]
    },
    {
      id:11,
      title: 'Portal from user HelpDesk IT',
      image: '/images/projectsImages/portalusers.png',
      category:"Infrastructure",
      data:{
        description: `Portal para usuarios para la gestion de incidencias y requerimientos de soporte tecnico, La interface brinda al usuario la posibilidad de abrir un ticket de soporte tecnico, ver el estado de los tickets abiertos, ver el historial de tickets cerrados, y la posibilidad de descargar manuales y guias de usuario.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"HTML 5",
          svgIcon: "/images/html5.svg",
        },
        {
          name:"CSS 3",
          svgIcon: "/images/css.svg",
        },
        {
          name:"Java Script",
          svgIcon: "/images/javascript.svg",
        }
      ]
    },
  ];

export const experience = [
  {
      title: "Frontend Development",
      data: [
          {
              skill: "HTML",
              level: "Basic",
              svgIcon: "/images/html5.svg",
          },
          {
              skill: "CSS",
              level: "Basic",
              svgIcon: "/images/css.svg",
          },
          {
              skill: "JavaScript",
              level: "Basic",
              svgIcon: "/images/javascript.svg",
          },
          {
              skill: "React",
              level: "Basic",
              svgIcon: "/images/react.svg",
          },
          {
            skill: "Tailwind CSS",
              level: "Basic",
              svgIcon: "/images/tailwindcss.svg",
          }
      ],
  },
  {
      title: "Backend Development",
      data: [
          {
              skill: "C",
              level: "Experienced",
              svgIcon: "/images/c.svg",
          },
          {
              skill: "C++",
              level: "Experienced",
              svgIcon: "/images/c++.svg",
          },
          {
              skill: "PHP",
              level: "Basic",
              svgIcon: "/images/php.svg",
          },
          {
              skill: "Python",
              level: "Advanced",
              svgIcon: "/images/python.svg",
          },
          {
              skill: "API RestFull",
              level: "Basic",
              svgIcon: "/images/postman.svg",
          },
      ],
  },
  {
    title: "Infraestructures",
      data: [
          {
              skill: "Windows Server",
              level: "Advanced",
              svgIcon: "/images/windows.svg",
          },
          {
              skill: "Active Directory",
              level: "Advanced",
              svgIcon: "/images/ad.svg",
          },
          {
              skill: "Linux",
              level: "Experienced",
              svgIcon: "/images/linux.svg",
          },
          {
              skill: "VMware",
              level: "Experienced",
              svgIcon: "/images/vmware.svg",
          },
          {
              skill: "Veeam",
              level: "Intermediate",
              svgIcon: "/images/veeam.svg",
          },
          {
              skill: "Bash Scripting",
              level: "Intermediate",
              svgIcon: "/images/bash.svg",
          },
          {
              skill: "PowerShell Scripting",
              level: "Intermediate",
              svgIcon: "/images/powershell.svg",
          },
          {
            skill: "Microsoft Office",
              level: "Experienced",
              svgIcon: "/images/microsoft.svg",
          }
      ],
  },
  {
    title: "Databases",
      data: [
          {
              skill: "MS SQL",
              level: "Experienced",
              svgIcon: "/images/sql-server.svg",
          },
          {
              skill: "MySQL",
              level: "Intermediate",
              svgIcon: "/images/mysql.svg",
          },
          {
              skill: "PostgreSQL",
              level: "Intermediate",
              svgIcon: "/images/postgresql.svg",
          },
          {
              skill: "Oracle SQL",
              level: "Basic",
              svgIcon: "/images/oracle.svg",
          },
          {
            skill: "MongoDB",
              level: "Basic",
              svgIcon: "/images/mongodb.svg",
          },
          {
            skill: "SQLite",
              level: "Basic",
              svgIcon: "/images/sqlite.svg",
          },
          {
            skill: "Redis",
              level: "Basic",
              svgIcon: "/images/redis.svg",
          }
      ],
  },
  {
    title: "Cloud",
    data: [
            {
              skill: "Amazon Web Services",
              level: "Experienced",
              svgIcon: "/images/aws.svg",
          },
          {
              skill: "Azure Cloud",
              level: "Basic",
              svgIcon: "/images/azure.svg",
          },
          {
              skill: "Google Cloud Platform",
              level: "Basic",
              svgIcon: "/images/google.svg",
          },
    ],
  },
  {
    title: "Embedded Systems",
      data: [
          {
              skill: "Arduino",
              level: "Experienced",
              svgIcon: "/images/arduino.svg",
          },
          {
              skill: "Raspberry Pi",
              level: "Intermediate",
              svgIcon: "/images/raspberry.svg",
          },
          {
              skill: "Espressift",
              level: "Experienced",
              svgIcon: "/images/esp.svg",
          },
          {
              skill: "ST Microelectronics",
              level: "Intermediate",
              svgIcon: "/images/st.svg",
          },
      ],
  },
  {
    title: "Others",
      data: [
          {
              skill: "Git",
              level: "Intermediate",
              svgIcon: "/images/git.svg",
          },
          {
              skill: "GitLab",
              level: "Intermediate",
              svgIcon: "/images/gitlab.svg",
          },
          {
              skill: "GitHub",
              level: "Intermediate",
              svgIcon: "/images/github.svg",
          },
          {
              skill: "Sage ERP",
              level: "Advanced",
              svgIcon: "/images/sage.svg",
          },
          {
              skill: "Kali Linux",
              level: "Basic",
              svgIcon: "/images/kali.svg",
          },
          {
              skill: "Hetical Hacking",
              level: "Basic",
              svgIcon: "/images/masscan.svg",
          },
          {
              skill: "Electronics",
              level: "Experienced",
              svgIcon: "/images/microchip.svg",
          },
      ],
  }
];

export const socialHandles = [
/*  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://github.com/Pablo2205",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"https://www.linkedin.com/in/pablo-coria01/",
  },*/
];