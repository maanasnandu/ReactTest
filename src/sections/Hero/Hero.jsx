import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedLightIcon from '../../assets/linkedin-light.svg'
import linkedDarkIcon from '../../assets/linkedin-dark.svg'
import instaLightIcon from '../../assets/instagram-light.svg'
import instaDarkIcon from '../../assets/instagram-dark.svg'
import CV from '../../assets/cv.pdf'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'

import { useTheme } from '../../common/ThemeContext'
import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import loveIcon from '../../assets/loveIcon.png'

// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim'

function Hero () {
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async engine => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = container => {
    console.log(container)
  }

  const { theme, toggleTheme } = useTheme()

  /**Background animation changes */
  console.log('Changing theme here: ', theme)

  const lightAmongUs = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: '#ffffff'
        },
        image: '',
        position: '',
        repeat: '',
        size: '',
        opacity: 1
      },
      backgroundMask: {
        composite: 'destination-out',
        cover: {
          opacity: 1,
          color: {
            value: ''
          }
        },
        enable: false
      },
      clear: true,
      defaultThemes: {},
      delay: 0,
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: {
            enable: false,
            mode: []
          },
          onDiv: {
            selectors: [],
            enable: false,
            mode: [],
            type: 'circle'
          },
          onHover: {
            enable: false,
            mode: [],
            parallax: {
              enable: false,
              force: 2,
              smooth: 10
            }
          },
          resize: {
            delay: 0.5,
            enable: true
          }
        },
        modes: {
          trail: {
            delay: 1,
            pauseOnStop: false,
            quantity: 1
          },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: 'ease-out-quad',
            factor: 1,
            maxSpeed: 50,
            speed: 1
          },
          bounce: {
            distance: 200
          },
          bubble: {
            distance: 200,
            duration: 0.4,
            mix: false,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: []
            }
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5
            },
            radius: 60
          },
          grab: {
            distance: 100,
            links: {
              blink: false,
              consent: false,
              opacity: 1
            }
          },
          push: {
            default: true,
            groups: [],
            quantity: 4
          },
          remove: {
            quantity: 2
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: 'ease-out-quad',
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: 'ease-out-quad',
              selectors: []
            }
          },
          slow: {
            factor: 3,
            radius: 200
          },
          particle: {
            replaceCursor: false,
            pauseOnStop: false,
            stopDelay: 0
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: '#ffffff'
                },
                stop: {
                  value: '#000000'
                }
              },
              radius: 1000
            },
            shadow: {
              color: {
                value: '#000000'
              },
              length: 2000
            }
          }
        }
      },
      manualParticles: [],
      particles: {
        bounce: {
          horizontal: {
            value: 1
          },
          vertical: {
            value: 1
          }
        },
        collisions: {
          absorb: {
            speed: 2
          },
          bounce: {
            horizontal: {
              value: 1
            },
            vertical: {
              value: 1
            }
          },
          enable: false,
          maxSpeed: 50,
          mode: 'bounce',
          overlap: {
            enable: true,
            retries: 0
          }
        },
        color: {
          value: '#000000',
          animation: {
            h: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            },
            s: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            },
            l: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            }
          }
        },
        effect: {
          close: true,
          fill: true,
          options: {},
          type: []
        },
        groups: {
          z5000: {
            number: {
              value: 70
            },
            zIndex: {
              value: 50
            }
          },
          z7500: {
            number: {
              value: 30
            },
            zIndex: {
              value: 75
            }
          },
          z2500: {
            number: {
              value: 50
            },
            zIndex: {
              value: 25
            }
          },
          z1000: {
            number: {
              value: 40
            },
            zIndex: {
              value: 10
            }
          }
        },
        move: {
          angle: {
            offset: 0,
            value: 10
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 3000,
              y: 3000
            }
          },
          center: {
            x: 50,
            y: 50,
            mode: 'percent',
            radius: 0
          },
          decay: 0,
          distance: {},
          direction: 'right',
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50
          },
          path: {
            clamp: true,
            delay: {
              value: 0
            },
            enable: false,
            options: {}
          },
          outModes: {
            default: 'out',
            bottom: 'out',
            left: 'out',
            right: 'out',
            top: 'out'
          },
          random: false,
          size: false,
          speed: 5,
          spin: {
            acceleration: 0,
            enable: false
          },
          straight: false,
          trail: {
            enable: false,
            length: 10,
            fill: {}
          },
          vibrate: false,
          warp: false
        },
        number: {
          density: {
            enable: false,
            width: 1920,
            height: 1080
          },
          limit: {
            mode: 'delete',
            value: 0
          },
          value: 200
        },
        opacity: {
          value: 1,
          animation: {
            count: 0,
            enable: false,
            speed: 2,
            decay: 0,
            delay: 0,
            sync: false,
            mode: 'auto',
            startValue: 'random',
            destroy: 'none'
          }
        },
        reduceDuplicates: false,
        shadow: {
          blur: 0,
          color: {
            value: '#000'
          },
          enable: false,
          offset: {
            x: 0,
            y: 0
          }
        },
        shape: {
          close: true,
          fill: true,
          options: {},
          type: 'circle'
        },
        size: {
          value: 3,
          animation: {
            count: 0,
            enable: false,
            speed: 5,
            decay: 0,
            delay: 0,
            sync: false,
            mode: 'auto',
            startValue: 'random',
            destroy: 'none'
          }
        },
        stroke: {
          width: 0
        },
        zIndex: {
          value: 5,
          opacityRate: 0.5,
          sizeRate: 1,
          velocityRate: 1
        },
        destroy: {
          bounds: {},
          mode: 'none',
          split: {
            count: 1,
            factor: {
              value: 3
            },
            rate: {
              value: {
                min: 4,
                max: 9
              }
            },
            sizeOffset: true,
            particles: {}
          }
        },
        roll: {
          darken: {
            enable: false,
            value: 0
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0
          },
          mode: 'vertical',
          speed: 25
        },
        tilt: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false
          },
          direction: 'clockwise',
          enable: false
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1
          }
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10
          }
        },
        life: {
          count: 0,
          delay: {
            value: 0,
            sync: false
          },
          duration: {
            value: 0,
            sync: false
          }
        },
        rotate: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false
          },
          direction: 'clockwise',
          path: false
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false
          },
          enable: false,
          opacity: 1,
          rotation: {
            value: 45
          },
          width: 1
        },
        links: {
          blink: false,
          color: {
            value: '#fff'
          },
          consent: false,
          distance: 100,
          enable: false,
          frequency: 1,
          opacity: 1,
          shadow: {
            blur: 5,
            color: {
              value: '#000'
            },
            enable: false
          },
          triangles: {
            enable: false,
            frequency: 1
          },
          width: 1,
          warp: false
        },
        repulse: {
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1
        }
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      smooth: false,
      style: {},
      themes: [],
      zLayers: 100,
      emitters: {
        autoPlay: true,
        fill: true,
        life: {
          wait: false
        },
        rate: {
          quantity: 1,
          delay: 7
        },
        shape: {
          options: {},
          replace: {
            color: false,
            opacity: false
          },
          type: 'square'
        },
        startCount: 0,
        size: {
          mode: 'percent',
          height: 0,
          width: 0
        },
        particles: {
          shape: {
            type: 'images',
            options: {
              images: {
                src: 'https://img.icons8.com/fluency/48/among-us.png',
                width: 500,
                height: 634
              }
            }
          },
          size: {
            value: 40
          },
          move: {
            speed: 10,
            outModes: {
              default: 'none',
              right: 'destroy'
            },
            straight: true
          },
          zIndex: {
            value: 0
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 10,
              sync: true
            }
          }
        },
        position: {
          x: -5,
          y: 55
        }
      },
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true
        }
      }
    }),
    []
  )

  const darkAmongUs = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: '#000000'
        },
        image: '',
        position: '',
        repeat: '',
        size: '',
        opacity: 1
      },
      backgroundMask: {
        composite: 'destination-out',
        cover: {
          opacity: 1,
          color: {
            value: ''
          }
        },
        enable: false
      },
      clear: true,
      defaultThemes: {},
      delay: 0,
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: {
            enable: false,
            mode: []
          },
          onDiv: {
            selectors: [],
            enable: false,
            mode: [],
            type: 'circle'
          },
          onHover: {
            enable: false,
            mode: [],
            parallax: {
              enable: false,
              force: 2,
              smooth: 10
            }
          },
          resize: {
            delay: 0.5,
            enable: true
          }
        },
        modes: {
          trail: {
            delay: 1,
            pauseOnStop: false,
            quantity: 1
          },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: 'ease-out-quad',
            factor: 1,
            maxSpeed: 50,
            speed: 1
          },
          bounce: {
            distance: 200
          },
          bubble: {
            distance: 200,
            duration: 0.4,
            mix: false,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: []
            }
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5
            },
            radius: 60
          },
          grab: {
            distance: 100,
            links: {
              blink: false,
              consent: false,
              opacity: 1
            }
          },
          push: {
            default: true,
            groups: [],
            quantity: 4
          },
          remove: {
            quantity: 2
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: 'ease-out-quad',
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: 'ease-out-quad',
              selectors: []
            }
          },
          slow: {
            factor: 3,
            radius: 200
          },
          particle: {
            replaceCursor: false,
            pauseOnStop: false,
            stopDelay: 0
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: '#ffffff'
                },
                stop: {
                  value: '#000000'
                }
              },
              radius: 1000
            },
            shadow: {
              color: {
                value: '#000000'
              },
              length: 2000
            }
          }
        }
      },
      manualParticles: [],
      particles: {
        bounce: {
          horizontal: {
            value: 1
          },
          vertical: {
            value: 1
          }
        },
        collisions: {
          absorb: {
            speed: 2
          },
          bounce: {
            horizontal: {
              value: 1
            },
            vertical: {
              value: 1
            }
          },
          enable: false,
          maxSpeed: 50,
          mode: 'bounce',
          overlap: {
            enable: true,
            retries: 0
          }
        },
        color: {
          value: '#fff',
          animation: {
            h: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            },
            s: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            },
            l: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            }
          }
        },
        effect: {
          close: true,
          fill: true,
          options: {},
          type: []
        },
        groups: {
          z5000: {
            number: {
              value: 70
            },
            zIndex: {
              value: 50
            }
          },
          z7500: {
            number: {
              value: 30
            },
            zIndex: {
              value: 75
            }
          },
          z2500: {
            number: {
              value: 50
            },
            zIndex: {
              value: 25
            }
          },
          z1000: {
            number: {
              value: 40
            },
            zIndex: {
              value: 10
            }
          }
        },
        move: {
          angle: {
            offset: 0,
            value: 10
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 3000,
              y: 3000
            }
          },
          center: {
            x: 50,
            y: 50,
            mode: 'percent',
            radius: 0
          },
          decay: 0,
          distance: {},
          direction: 'right',
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50
          },
          path: {
            clamp: true,
            delay: {
              value: 0
            },
            enable: false,
            options: {}
          },
          outModes: {
            default: 'out',
            bottom: 'out',
            left: 'out',
            right: 'out',
            top: 'out'
          },
          random: false,
          size: false,
          speed: 5,
          spin: {
            acceleration: 0,
            enable: false
          },
          straight: false,
          trail: {
            enable: false,
            length: 10,
            fill: {}
          },
          vibrate: false,
          warp: false
        },
        number: {
          density: {
            enable: false,
            width: 1920,
            height: 1080
          },
          limit: {
            mode: 'delete',
            value: 0
          },
          value: 200
        },
        opacity: {
          value: 1,
          animation: {
            count: 0,
            enable: false,
            speed: 2,
            decay: 0,
            delay: 0,
            sync: false,
            mode: 'auto',
            startValue: 'random',
            destroy: 'none'
          }
        },
        reduceDuplicates: false,
        shadow: {
          blur: 0,
          color: {
            value: '#000'
          },
          enable: false,
          offset: {
            x: 0,
            y: 0
          }
        },
        shape: {
          close: true,
          fill: true,
          options: {},
          type: 'circle'
        },
        size: {
          value: 3,
          animation: {
            count: 0,
            enable: false,
            speed: 5,
            decay: 0,
            delay: 0,
            sync: false,
            mode: 'auto',
            startValue: 'random',
            destroy: 'none'
          }
        },
        stroke: {
          width: 0
        },
        zIndex: {
          value: 5,
          opacityRate: 0.5,
          sizeRate: 1,
          velocityRate: 1
        },
        destroy: {
          bounds: {},
          mode: 'none',
          split: {
            count: 1,
            factor: {
              value: 3
            },
            rate: {
              value: {
                min: 4,
                max: 9
              }
            },
            sizeOffset: true,
            particles: {}
          }
        },
        roll: {
          darken: {
            enable: false,
            value: 0
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0
          },
          mode: 'vertical',
          speed: 25
        },
        tilt: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false
          },
          direction: 'clockwise',
          enable: false
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1
          }
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10
          }
        },
        life: {
          count: 0,
          delay: {
            value: 0,
            sync: false
          },
          duration: {
            value: 0,
            sync: false
          }
        },
        rotate: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false
          },
          direction: 'clockwise',
          path: false
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false
          },
          enable: false,
          opacity: 1,
          rotation: {
            value: 45
          },
          width: 1
        },
        links: {
          blink: false,
          color: {
            value: '#fff'
          },
          consent: false,
          distance: 100,
          enable: false,
          frequency: 1,
          opacity: 1,
          shadow: {
            blur: 5,
            color: {
              value: '#000'
            },
            enable: false
          },
          triangles: {
            enable: false,
            frequency: 1
          },
          width: 1,
          warp: false
        },
        repulse: {
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1
        }
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      smooth: false,
      style: {},
      themes: [],
      zLayers: 100,
      emitters: {
        autoPlay: true,
        fill: true,
        life: {
          wait: false
        },
        rate: {
          quantity: 1,
          delay: 7
        },
        shape: {
          options: {},
          replace: {
            color: false,
            opacity: false
          },
          type: 'square'
        },
        startCount: 0,
        size: {
          mode: 'percent',
          height: 0,
          width: 0
        },
        particles: {
          shape: {
            type: 'images',
            options: {
              images: {
                src: 'https://particles.js.org/images/cyan_amongus.png',
                width: 500,
                height: 634
              }
            }
          },
          size: {
            value: 40
          },
          move: {
            speed: 10,
            outModes: {
              default: 'none',
              right: 'destroy'
            },
            straight: true
          },
          zIndex: {
            value: 0
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 10,
              sync: true
            }
          }
        },
        position: {
          x: -5,
          y: 55
        }
      },
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true
        }
      }
    }),
    []
  )

  const options = theme === 'light' ? lightAmongUs : darkAmongUs

  console.log('Option is now: ', options)

  const themeIcon = theme === 'light' ? sun : moon
  const linkedInIcon = theme === 'light' ? linkedLightIcon : linkedDarkIcon
  const instaIcon = theme === 'light' ? instaLightIcon : instaDarkIcon
  const githubIcon = theme === 'light' ? githubLight : githubDark

  if (init) {
    return (
      <>
        <Particles
          id='tsparticles'
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <section id='hero' className={styles.container}>
          <div className={styles.colorModeContainer}>
            <img
              className={styles.hero}
              src={heroImg}
              alt='Profile picture of Maanas Muddam'
            />
            <img
              src={themeIcon}
              className={styles.colorMode}
              alt='Theme Mode'
              onClick={toggleTheme}
            />
          </div>

          <div className={styles.info}>
            <h1>
              Maanas <br /> Muddam
            </h1>
            <h3>Web Developer</h3>

            <span>
              <a href='https://github.com/maanasnandu' target='_blank'>
                <img src={githubIcon} alt='GitHub' />
              </a>
              <a href='https://www.linkedin.com/in/msnm' target='_blank'>
                <img src={linkedInIcon} alt='LinkedIn' />
              </a>

              <a
                href='https://www.instagram.com/msn.omdlensman/'
                target='_blank'
              >
                <img src={instaIcon} alt='Instagram' />
              </a>
            </span>

            <p className='description'>
              I'm a Web Developer with 3+ years of professional expertise,
              <br />
              passionate about building great web experiences. <br />I also love
              photography and travel
            </p>

            <a href={CV} download>
              <button className='hover'>
                <p className={styles.resumeHeading}>Resume</p>
              </button>
            </a>
          </div>
        </section>
      </>
    )
  }

  return <></>
}

export default Hero
