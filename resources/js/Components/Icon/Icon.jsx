import IconSvg from "../../../../public/logo.svg";

export default function Icon(params) {
    return <img
                loading="lazy" alt="Icon" src={IconSvg} width={500} height={500} />;
}
