import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image as ChakraImage,
  Link,
  chakra,
} from '@chakra-ui/react';
import NextImage from 'next/image';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

const Image = chakra(NextImage, {
  shouldForwardProp: (prop: string) =>
    ['width', 'height', 'src', 'alt', 'onLoad', 'onClick'].includes(prop),
});

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent alignSelf="center" bgColor="pGray.800">
        <ModalBody p={2}>
          <Image src={imgUrl} width="100%" height="100%" />
        </ModalBody>
        <ModalFooter justifyContent="start">
          <Link href={imgUrl} target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
