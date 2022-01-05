import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '@components/ui'
import Navbar from '../components/common/Navbar/Navbar'
import Image from 'next/image'
import Button from '@components/ui/Button'
import Footer from '@components/common/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <Image
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1589,c_limit/ff82af3e-3e1a-41a3-b1eb-7712136effb1/nike-official-site.jpg"
          alt="Nike"
          width={1589}
          height={838}
          layout="responsive"
        />
        <div className="my-8 lg:text-center">
          <p className="mb-2">
            Der Nike Pegasus 38 Shield: Dein Arbeitstier mit Flügeln für
            Regentage.
          </p>
          <h1 className="mb-8 text-4xl font-black uppercase lg:text-5xl font-headline">
            Bleib warm. Bleib trocken. Bleib schnell.
          </h1>
          <div className="flex justify-center space-x-2">
            <Button
              href="/test"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Kaufen
            </Button>
          </div>
        </div>
        <div className="my-20">
          <h2 className="mb-8 text-2xl">Die richtige Ausrüstung</h2>
          <div className="flex gap-4 overflow-x-scroll flex-nowrap hover:scrollbar-thumb-gray-900 scrollbar-thin">
            <div className="flex-none w-3/4 lg:w-1/3">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_525,c_limit/eaad3abc-94cb-442a-8a22-9b006153eb80/react-miler-2-shield-wetterfester-strassenlaufschuh-fur-WnSDPL.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-16 lg:flex">
                <div>
                  <h4>Nike React Miler 2 Shield</h4>
                  <p className="text-gray-500">
                    Wetterfester Straßenlaufschuh für Damen
                  </p>
                </div>
                <p className="mr-4 whitespace-nowrap">139,99 €</p>
              </div>
            </div>
            <div className="flex-none w-3/4 lg:w-1/3">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_525,c_limit/ed177def-b551-43a8-95fa-40353d8fb84f/pegasus-trail-3-gore-tex-wasserfester-trail-laufschuh-fur-herren-FngTl6.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-16 lg:flex">
                <div>
                  <h4>Nike Pegasus Trail 3 GORE-TEX</h4>
                  <p className="text-gray-500">
                    Wasserfester Trail-Laufschuh für Herren
                  </p>
                </div>
                <p className="mr-4 whitespace-nowrap">149,99 €</p>
              </div>
            </div>
            <div className="flex-none w-3/4 lg:w-1/3">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/a05f509e-8d66-411e-9ba1-38b64f8bd559/air-zoom-pegasus-38-shield-wetterfester-strassenlaufschuh-fur-herren-BKgmbZ.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-16 lg:flex">
                <div>
                  <h4>Nike React Miler 2 Shield</h4>
                  <p className="text-gray-500">
                    Wetterfester Straßenlaufschuh für Damen
                  </p>
                </div>
                <p className="mr-4 whitespace-nowrap">139,99 €</p>
              </div>
            </div>
            <div className="flex-none w-3/4 lg:w-1/3">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/aaf5068f-f45c-4492-898b-100b463107ed/air-zoom-pegasus-37-shield-herren-laufschuh-nf5kSS.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-16 lg:flex">
                <div>
                  <h4>Nike Pegasus Trail 3 GORE-TEX</h4>
                  <p className="text-gray-500">
                    Wetterfester Straßenlaufschuh für Damen
                  </p>
                </div>
                <p className="mr-4 whitespace-nowrap">149,99 €</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Home
