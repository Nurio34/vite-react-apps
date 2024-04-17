import { motion } from "framer-motion";
import { useContactContext } from "../../GlobalApp";
import emailjs from "@emailjs/browser";

function SendButton() {
    const { formData } = useContactContext();

    const serviceID = "service_du7is2e";
    const templateID = "template_ay0kls9";
    const publicKey = "BIpt7Ly1YaB4Zpy08";

    emailjs.init({
        publicKey,
    });

    const sendEmail = () => {
        emailjs.send(serviceID, templateID, formData).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
            },
            (error) => {
                console.log("FAILED...", error);
            },
        );
    };

    return (
        <motion.button
            type="button"
            className=" ml-auto bg-green-400 text-white px-[4vw] rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={sendEmail}
        >
            Send
        </motion.button>
    );
}

export default SendButton;
