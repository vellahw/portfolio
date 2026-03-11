// components/Modal.tsx
import { motion } from "framer-motion";
import { backDrop, closeBtn, modalEl } from "./Modal.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { css } from "../../styled-system/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/customSwiper.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  slideName: string;
  slideCount: number;
}

export default function Modal({ onClose, slideName, slideCount }: ModalProps) {
  return (
    <>
      {/* backdrop */}
      <motion.div
        className={backDrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* slide modal */}
      <motion.div
        className={modalEl}
        initial={{ opacity: 0, x: "-50%", y: "-50%" }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          observer={true}
          observeParents={true}
          loop={true}
        >
          {Array.from({ length: slideCount }).map((_, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/img/project/project-${slideName}${index + 1}.png`}
                alt="프로젝트 이미지"
                className={css({ m: "0 auto" })}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={onClose} className={closeBtn}>
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 3.16602C10.2758 3.16602 3.16663 10.2752 3.16663 18.9994C3.16663 27.7235 10.2758 34.8327 19 34.8327C27.7241 34.8327 34.8333 27.7235 34.8333 18.9994C34.8333 10.2752 27.7241 3.16602 19 3.16602ZM24.32 22.641C24.7791 23.1002 24.7791 23.8602 24.32 24.3194C24.0825 24.5569 23.7816 24.6677 23.4808 24.6677C23.18 24.6677 22.8791 24.5569 22.6416 24.3194L19 20.6777L15.3583 24.3194C15.1208 24.5569 14.82 24.6677 14.5191 24.6677C14.2183 24.6677 13.9175 24.5569 13.68 24.3194C13.2208 23.8602 13.2208 23.1002 13.68 22.641L17.3216 18.9994L13.68 15.3577C13.2208 14.8985 13.2208 14.1385 13.68 13.6794C14.1391 13.2202 14.8991 13.2202 15.3583 13.6794L19 17.321L22.6416 13.6794C23.1008 13.2202 23.8608 13.2202 24.32 13.6794C24.7791 14.1385 24.7791 14.8985 24.32 15.3577L20.6783 18.9994L24.32 22.641Z"
              fill="#f9f8f8"
            />
          </svg>
        </button>
      </motion.div>
    </>
  );
}
