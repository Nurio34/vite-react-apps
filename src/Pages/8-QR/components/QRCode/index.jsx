import { useQR } from "../../GlobalApp";
import "./index.scss";

function QRCode() {
    const { isLoading, data } = useQR();
    console.log(data);
    return (
        <>
            <div className="QRCode   col-span-2 aspect-square md:col-span-1 p-[2vw]">
                {!data && !isLoading ? (
                    <p className=" h-full grid place-content-center">
                        Get your QR Code...
                    </p>
                ) : data || isLoading ? (
                    <figure className="w-full aspect-square">
                        {data && (
                            <div>
                                <img src={data} alt="qr code" />
                            </div>
                        )}
                    </figure>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default QRCode;
