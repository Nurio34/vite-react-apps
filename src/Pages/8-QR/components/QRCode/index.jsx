import { useQR } from "../../GlobalApp";
import "./index.scss";
import { saveAs } from "file-saver";

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
                    <div className=" grid justify-items-center gap-1">
                        <figure className="w-full aspect-square">
                            {data && (
                                <div>
                                    <img src={data} alt="qr code" />
                                </div>
                            )}
                        </figure>
                        <button
                            type="button"
                            className="bg-orange-500  text-white padding2"
                            onClick={(e) => {
                                saveAs(data, "qr.png");
                            }}
                        >
                            Download
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default QRCode;
