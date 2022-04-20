import { Parallax, Keyframes } from 'scrollex';
import { Box, Center, chakra, Heading, Img } from '@chakra-ui/react';

const ParallaxItem = chakra(Parallax.Item);
const ParallaxSection = chakra(Parallax.Section);
const ParallaxContainer = chakra(Parallax.Container);

const keyframes: Record<string, Keyframes> = {
  heading: ({ section }) => ({
    [section.topAt('container-top')]: {
      translateY: 0,
    },
    [section.bottomAt('container-top')]: {
      translateY: 200,
    },
  }),
  bgImage: ({ section }) => ({
    [section.topAt('container-top')]: {
      translateY: 0,
    },
    [section.bottomAt('container-top')]: {
      translateY: 125,
    },
  }),
  image: ({ section, data }) => ({
    [section.topAt('container-top')]: {
      translateZ: data.initialZ,
    },
    [section.bottomAt('container-bottom')]: {
      translateZ: data.initialZ + 510,
    },
  }),
  footer: ({ section, container }) => ({
    [section.topAt('container-bottom')]: {
      translateY: 200,
    },
    [section.bottomAt('container-bottom')]: {
      translateY: 0,
    },
  }),
};

const images = [
  {
    x: -600,
    y: -500,
    z: -200,
    src: 'https://picsum.photos/id/121/600/600',
  },
  {
    x: 600,
    y: -500,
    z: -100,
    src: 'https://picsum.photos/id/146/600/600',
  },
  {
    x: 0,
    y: -100,
    z: 0,
    src: 'https://picsum.photos/id/152/1000/600',
  },
  {
    x: -450,
    y: 300,
    z: 100,
    src: 'https://picsum.photos/id/235/600/600',
  },
  {
    x: 400,
    y: 250,
    z: 200,
    src: 'https://picsum.photos/id/311/1000/800',
  },
];

export default function App() {
  return (
    <ParallaxContainer
      scrollAxis="y"
      height="100vh"
      width="100vw"
      bg="rgba(20, 19, 21, .96)"
      color="whatsapp.400"
    >
      <ParallaxSection h="100vh">
        <ParallaxItem keyframes={keyframes.bgImage} pos="absolute" inset={0}>
          <Img
            src="https://picsum.photos/id/209/2000/1000"
            objectFit="cover"
            h="100%"
            w="100%"
            transform="scale(1.25)"
          />
        </ParallaxItem>
        <Center h="100%">
          <ParallaxItem keyframes={keyframes.heading}>
            <Heading fontSize="9xl">Skrolify</Heading>
          </ParallaxItem>
        </Center>
      </ParallaxSection>
      <ParallaxSection showOverflow height="500vh">
        <Box
          pos="sticky"
          top={0}
          h="100vh"
          style={{ perspective: 600 }}
          overflow="hidden"
        >
          {images.map((image) => {
            return (
              <ParallaxItem
                key={image.src}
                keyframes={keyframes.image}
                pos="absolute"
                inset={0}
                display="grid"
                placeItems="center"
                left={image.x}
                top={image.y}
                data={{ initialZ: image.z }}
              >
                <Img src={image.src} h="250px" objectFit="cover" />
              </ParallaxItem>
            );
          })}
        </Box>
      </ParallaxSection>
      <ParallaxSection h="100vh">
        <Center h="100%">
          <ParallaxItem keyframes={keyframes.footer}>
            <Heading fontSize="9xl">Skrolify</Heading>
          </ParallaxItem>
        </Center>
      </ParallaxSection>
    </ParallaxContainer>
  );
}
