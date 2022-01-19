import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '@components/ui'
import Navbar from '../components/common/Navbar/Navbar'
import Image from 'next/image'
import Button from '@components/ui/Button'
import Footer from '@components/common/Footer'
import MobileMenu from '@components/common/MobileMenu'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileMenu />
      <Navbar />
      <Container>
        <Image
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1589,c_limit/11eb3ef3-152e-4162-b72b-5d3c74f2fe2d/nike-official-site.jpg"
          alt="Nike"
          width={1589}
          height={615}
          layout="responsive"
        />
        <div className="my-8 lg:text-center">
          <p className="mb-2">Progress Starts Here</p>
          <h1 className="max-w-2xl mx-auto mb-8 text-4xl font-black uppercase lg:text-7xl font-headline ">
            Progress passiert in deinem Tempo
          </h1>
          <div className="justify-center space-x-2 lg:flex">
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
      </Container>
      <div className="my-20">
        <Container>
          <h2 className="mb-8 text-2xl">Die richtige Ausrüstung</h2>
        </Container>
        <div className="max-w-[1800px] mx-auto lg:px-12">
          <div className="flex w-full overflow-x-auto slider snap-x hover:scrollbar-thumb-gray-900 scrollbar-thin">
            <div className="w-3/4 mr-3 snap-start first:-ml-0 last:mr-0 shrink-0 md:w-[33%]">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_524,c_limit/bb6f2759-23f5-4aec-8ae8-246a7a741f36/dri-fit-alpha-gepolsterter-sport-bh-mit-reissverschluss-vorne-und-starkem-halt-fur-8x39Kh.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-8 lg:flex">
                <div>
                  <h4>Nike Dri-FIT Alpha</h4>
                  <p className="text-gray-500">
                    Gepolsterter Sport-BH mit Reißverschluss vorne und starkem
                    Halt für Damen
                  </p>
                </div>
                <p className="mr-4 whitespace-nowrap">59,99 €</p>
              </div>
            </div>
            <div className="w-3/4 mr-3 snap-start first:-ml-0 md:last:mr-0 shrink-0 md:w-[33%]">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_524,c_limit/deb52d93-950c-49d3-8da0-2a9f4e24e999/dri-fit-one-luxe-7-8-leggings-mit-mittelhohem-bund-fur-Z5Kms0.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-8 lg:flex">
                <div>
                  <h4>Nike Dri-FIT One Luxe</h4>
                  <p className="text-gray-500">
                    7/8-Leggings mit mittelhohem Bund für Damen
                  </p>
                </div>
                <p className="mr-4 whitespace-nowrap">94,99 €</p>
              </div>
            </div>
            <div className="w-3/4 mr-3 snap-start first:-ml-0 md:last:mr-0 shrink-0 md:w-[33%]">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_524,c_limit/d3d03f43-abe4-4275-bbdc-519a1fe5e64c/dri-fit-one-luxe-tanktop-mit-schmaler-passform-fur-sq08rW.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-8 lg:flex">
                <div>
                  <h4>Nike Dri-FIT One Luxe</h4>
                  <p className="text-gray-500">
                    Tankop in schmaler Passform für Damen
                  </p>
                </div>
                <p className="mr-4 whitespace-nowrap">44,99 €</p>
              </div>
            </div>
            <div className="w-3/4 mr-3 snap-start first:-ml-0 md:last:mr-0 shrink-0 md:w-[33%]">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_524,c_limit/3dcd2a33-60e2-4eee-8376-f9cce28adff0/superrep-go-2-trainingsschuh-zHbNF4.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-8 lg:flex">
                <div>
                  <h4>Nike SuperRep Go 2</h4>
                  <p className="text-gray-500">Damen-Trainingsschuh</p>
                </div>
                <p className="mr-4 whitespace-nowrap">99,99 €</p>
              </div>
            </div>
            <div className="w-3/4 mr-3 snap-start first:-ml-0 md:last:mr-0 shrink-0 md:w-[33%]">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_524,c_limit/bb6f2759-23f5-4aec-8ae8-246a7a741f36/dri-fit-alpha-gepolsterter-sport-bh-mit-reissverschluss-vorne-und-starkem-halt-fur-8x39Kh.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-8 lg:flex">
                <div>
                  <h4>Nike Dri-FIT Alpha</h4>
                  <p className="text-gray-500">
                    Gepolsterter Sport-BH mit Reißverschluss vorne und starkem
                    Halt für Damen
                  </p>
                </div>
                <p className="mr-4 whitespace-nowrap">59,99 €</p>
              </div>
            </div>
            <div className="w-3/4 mr-3 snap-start first:-ml-0 md:last:mr-0 shrink-0 md:w-[33%]">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_524,c_limit/deb52d93-950c-49d3-8da0-2a9f4e24e999/dri-fit-one-luxe-7-8-leggings-mit-mittelhohem-bund-fur-Z5Kms0.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-8 lg:flex">
                <div>
                  <h4>Nike Dri-FIT One Luxe</h4>
                  <p className="text-gray-500">
                    7/8-Leggings mit mittelhohem Bund für Damen
                  </p>
                </div>
                <p className="mr-4 whitespace-nowrap">94,99 €</p>
              </div>
            </div>
            <div className="w-3/4 mr-3 snap-start first:-ml-0 md:last:mr-0 shrink-0 md:w-[33%]">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_524,c_limit/d3d03f43-abe4-4275-bbdc-519a1fe5e64c/dri-fit-one-luxe-tanktop-mit-schmaler-passform-fur-sq08rW.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-8 lg:flex">
                <div>
                  <h4>Nike Dri-FIT One Luxe</h4>
                  <p className="text-gray-500">
                    Tankop in schmaler Passform für Damen
                  </p>
                </div>
                <p className="mr-4 whitespace-nowrap">44,99 €</p>
              </div>
            </div>
            <div className="w-3/4 mr-3 snap-start first:-ml-0 md:last:mr-0 shrink-0 md:w-[33%]">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_524,c_limit/3dcd2a33-60e2-4eee-8376-f9cce28adff0/superrep-go-2-trainingsschuh-zHbNF4.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-8 lg:flex">
                <div>
                  <h4>Nike SuperRep Go 2</h4>
                  <p className="text-gray-500">Damen-Trainingsschuh</p>
                </div>
                <p className="mr-4 whitespace-nowrap">99,99 €</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <Container>
          <h2 className="mb-8 text-2xl">Ausrüstung – auf dich abgestimmt</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="image-cover h-[500px] sm:h-[816px]  lg:h-full">
              <div className="absolute bottom-0 left-0 z-10 p-8 space-y-6 text-white">
                <div>Highlights für Damen</div>
                <Button
                  href="/test"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primaryLight"
                >
                  Kaufen
                </Button>
              </div>
              <Image
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_1216,c_limit/de14a239-c066-4013-afc3-7664c688b2da/nike-official-site.png"
                alt="Nike"
                width={797}
                height={1216}
                quality={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="image-cover h-[500px] sm:h-[400px] lg:h-full">
                <div className="absolute bottom-0 left-0 z-10 p-8 space-y-6 text-white">
                  <div>Die Neuste für Herren</div>
                  <Button
                    href="/test"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primaryLight"
                  >
                    Kaufen
                  </Button>
                </div>
                <Image
                  src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_787,c_limit/5a789f96-91e2-4357-90a6-a24a658cfe94/nike-official-site.png"
                  alt="Nike"
                  width={787}
                  height={600}
                  quality={100}
                />
              </div>
              <div className="image-cover h-[500px] sm:h-[400px]  lg:h-full">
                <div className="absolute bottom-0 left-0 z-10 p-8 space-y-6 text-white">
                  <div>Styles für Kinder</div>
                  <Button
                    href="/test"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primaryLight"
                  >
                    Kaufen
                  </Button>
                </div>
                <Image
                  src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_787,c_limit/0bf764f3-8602-4218-bab0-7e5675fd43aa/nike-official-site.png"
                  alt="Nike"
                  width={787}
                  height={600}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="my-20">
        <Container>
          <h2 className="mb-8 text-2xl">Die richtige Ausrüstung</h2>
        </Container>
        <Container>
          <div className="flex gap-4 overflow-x-scroll flex-nowrap hover:scrollbar-thumb-gray-900 scrollbar-thin">
            <div className="flex-none w-3/4 lg:w-1/3">
              <Image
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_525,c_limit/eaad3abc-94cb-442a-8a22-9b006153eb80/react-miler-2-shield-wetterfester-strassenlaufschuh-fur-WnSDPL.png"
                alt="Nike"
                width={591}
                height={591}
              />
              <div className="justify-between mt-4 mb-8 lg:flex">
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
              <div className="justify-between mt-4 mb-8 lg:flex">
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
              <div className="justify-between mt-4 mb-8 lg:flex">
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
              <div className="justify-between mt-4 mb-8 lg:flex">
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
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Home
