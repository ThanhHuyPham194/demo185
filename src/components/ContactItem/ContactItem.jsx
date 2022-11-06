import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import icon from '../../assets/svg/successIcon.svg';
import Footer from '../Footer/Footer';
import MainButton from '../MainButton/MainButton';
import './ContactItem.scss';
export default function ContactItem() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    reset({
      name: '',
      email: '',
      content: '',
    });
    Swal.fire({
      customClass: {
        confirmButton: 'swalSubmit',
      },
      imageUrl: icon,
      html: `
      <div class="wrapper">
            <p class="swalMainText">Thành công</p>
            <p class="swalSubText">Gửi yêu cầu thành công!</p>
      </div>
      `,
      background: '#232323',
      confirmButtonText: 'Xong'
    });
  };
  return (
    <div className="contact-item">
      <div className="contact-item__intro">
        <h2 className="title" data-aos="fade-up">
          Liên hệ
        </h2>
        <div className="text" data-aos="fade-up">
          <p>
            Chỉ cần điền vào biểu mẫu này và chúng tôi sẽ liên hệ với bạn ngay lập tức để thảo luận về dự án của bạn. Ghét hình thức? Gửi tin nhắn cho chúng tôi tại  <span>ttbtdttphcm@gmail.com.</span>
          </p>
        </div>
      </div>
      <div className="contact-item__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <div data-aos="fade-up">Tên của bạn</div>
            <input type="text" {...register("name", { required: { value: true, message: "Vui lòng nhập trường này" } })} placeholder='Nhập tên của bạn' data-aos="fade-up" />
            {errors.name && <p className='error'>{errors.name.message}</p>}
          </label>
          <label>
            <div data-aos="fade-up">Email của bạn</div>
            <input type="text" {...register("email", {
              required: "Vui lòng nhập trường này!", pattern:
              {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email không đúng định dạng!"
              }
            })} placeholder='Nhập email của bạn' data-aos="fade-up" />
            {errors.email && <p className='error'>{errors.email.message}</p>}
          </label>
          <label>
            <div data-aos="fade-up">Nội dung</div>
            <textarea name="" cols="30" rows="10" placeholder='Nhập nội dung ở đây!'  {...register("content", { required: "Vui lòng nhập trường này!" })} data-aos="fade-up"></textarea>
            {errors.content && <p className='error'>{errors.content.message}</p>}
          </label>
          <div className="button" data-aos="fade-up">
            <button type="submit" style={{ width: 176, height: 48 }}>Gui yeu cau</button>
            <MainButton width={176} height={48}>Gửi yêu cầu</MainButton>
          </div>
        </form>
      </div>
    </div>
  );
}

