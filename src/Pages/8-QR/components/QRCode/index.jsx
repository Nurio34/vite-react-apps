import { useQR } from "../../GlobalApp";

function QRCode() {
    const { data } = useQR();

    return (
        <div className="QRCode   col-span-2 aspect-square md:col-span-1">
            <figure>
                <img src={data} alt="qr code" />
            </figure>
        </div>
    );
}

export default QRCode;
