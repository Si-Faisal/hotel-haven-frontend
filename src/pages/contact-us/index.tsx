// src/components/ContactUs.tsx
import { useRef } from 'react';
import { useForm, SubmitHandler, } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import Main from '../../layout/main';
import './contact.css'
interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactUs: React.FC = () => {
    const { handleSubmit } = useForm<FormData>();
    const formRef = useRef<HTMLFormElement | null>(null);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            await emailjs.send(
                'service_nvwfvek',
                'template_qfb2f2p',
                data,
                'OqespYIns1SjwRkCQ'
            );
            console.log('Email sent successfully');
            if (formRef.current) {
                formRef.current.reset();
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <Main>
            <div className="p-4 w-1/2 mx-auto mt-4 mb-4">
                <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>

                <div id='contact' className='flex  justify-center items-center gap-10 '>
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit(onSubmit)}
                        transition={{ duration: 0.5 }}
                        className="w-full "
                    >
                        <div className="mb-4 mt-10">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border border-primary-500 rounded px-3 py-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-primary-500 rounded px-3 py-2 w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <textarea
                                placeholder="Your Message here ....."
                                rows={6}
                                className="border border-primary-500  rounded px-3 py-2 w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary-500 text-white font-bold py-2 px-4 rounded hover:bg-primary-600"
                        >
                            Send Message
                        </button>
                    </motion.form>

                </div>
            </div>

        </Main>
    );
};

export default ContactUs;