import { FormEvent, useRef, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

import Layout from '../components/Layout';
import Footer from '../components/Footer';

import { NextSeo } from 'next-seo';

const ContactUs = () => {
  // status for sending message
  const [status, setStatus] = useState({
    toSubmit: true,
    submitted: false,
    submitStatus: 'Send Message',
    info: {
      error: false,
      msg: null
    }
  });

  // other util states
  const [btnSubmit, setBtnSubmit] = useState('Send Message');
  const [formErr, setFormErr] = useState({
    err: false,
    msg: null
  });

  // html form inputs
  const email = useRef<HTMLInputElement>(null);
  const fullname = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const validateFields = () => {
    if (email.current.value == '' || fullname.current.value == '' || message.current.value == '') {
      return false;
    }

    return true;
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    // simple form validation
    if (validateFields()) {
      // change button text
      setBtnSubmit('Sending...');

      // set formerr -> false
      setFormErr({
        err: false,
        msg: ''
      });

      // send post data to formspress endpoint
      axios({
        method: 'POST',
        url: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
        data: {
          fullname: fullname.current.value,
          email: email.current.value,
          message: message.current.value
        }
      })
        .then((response) => {
          // set status state
          setStatus({
            toSubmit: false,
            submitted: true,
            submitStatus: 'Message Sent',
            info: {
              error: false,
              msg: 'Your message has been sent successfully. Thank you very much.'
            }
          });
        })
        .catch((e) => {
          // set status state
          setStatus({
            toSubmit: false,
            submitted: false,
            submitStatus: 'Error',
            info: {
              error: true,
              msg:
                'There was a problem with your request. It could be in our side or yours. Please try again later.'
            }
          });
        });
    } else {
      setFormErr({
        err: true,
        msg: 'Please complete the fields below!'
      });
    }
  };

  return (
    <Layout title="Contact Us | Iris Designs">
      {/* seo */}
      <NextSeo
        title="Contact Us | Iris Designs"
        description="Want to send a message to us? Let us know what you think of our service and what things could be improved."
        openGraph={{
          url: 'https://irisdesigns.cf/contact-us',
          title: 'Contact Us | Iris Designs',
          description:
            'Want to send a message to us? Let us know what you think of our service and what things could be improved.'
        }}
      />

      {/* header */}
      <div className="py-12 w-2/3 mx-auto text-center">
        <h3 className="text-4xl font-extrabold text-main">Contact Us</h3>
        <p className="text-2xl mt-4 dark:text-gray-100">
          Want to send a message to us? <br />
          Let us know what you think of our service and what things could be improved.
        </p>
      </div>

      <div className="py-12 w-11/12 xl:w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* main form */}
        <div className="w-11/12 mx-auto md:w-2/3 lg:w-1/2 bg-grad-1 py-12 rounded-md">
          {status.toSubmit ? (
            <div className="w-5/6 mx-auto">
              {/* form error */}
              {formErr.err ? (
                <p className="text-xl text-red-300 uppercase mb-3">{formErr.msg}</p>
              ) : null}
              {/* end form error */}

              <p className="text-xl text-white underline text-center font-extrabold uppercase">
                Send Us a Message
              </p>
              <form onSubmit={submitForm}>
                <div className="my-3 flex flex-col">
                  <label htmlFor="fullname" className="text-lg mb-1 text-white">
                    Fullname
                  </label>
                  <input
                    ref={fullname}
                    required
                    type="text"
                    className="py-3 px-4 w-full border-2 rounded-md border-gray-300 focus:border-main outline-none text-lg xl:text-xl"
                    placeholder="Your Fullname"
                  />
                </div>
                <div className="my-3 flex flex-col">
                  <label htmlFor="email-address" className="text-lg mb-1 text-white">
                    Email Address
                  </label>
                  <input
                    ref={email}
                    required
                    type="email"
                    className="py-3 px-4 w-full border-2 rounded-md border-gray-300 focus:border-main outline-none text-lg xl:text-xl"
                    placeholder="Your Email Address"
                  />
                  <small className="text-base text-white mb-1">
                    We do not collect and use emails for any advertising purposes. We will only use
                    it to contact you if needed.
                  </small>
                </div>
                <div className="my-3 flex flex-col">
                  <label htmlFor="message" className="text-lg mb-1 text-white">
                    Message
                  </label>
                  <textarea
                    ref={message}
                    required
                    name="message"
                    className="py-3 px-4 w-full border-2 h-32 rounded-md border-gray-300 focus:border-main outline-none text-lg xl:text-xl"
                    placeholder="What do you want to say to us?"
                  ></textarea>
                </div>
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-main opacity-80 hover:opacity-100 py-2 px-8 text-xl text-white"
                  >
                    {btnSubmit}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="w-5/6 mx-auto h-full flex items-center justify-center">
              <p className="text-center text-xl text-white">{status.info.msg}</p>
            </div>
          )}
        </div>
        <div className="w-11/12 mx-auto md:w-2/3 lg:w-1/2">
          <div className="w-5/6 mx-auto">
            <Image src="/contact-us.svg" height="500" width="500" />
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default ContactUs;
