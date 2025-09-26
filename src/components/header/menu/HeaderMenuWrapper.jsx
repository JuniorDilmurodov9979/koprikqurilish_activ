// HeaderMenuWrapper.js
import styled from "styled-components";

export const HeaderMenuWrapper = styled.div`
    .menu-item {
        position: relative;
    }

    .menu-btn,
    .link {
        padding: 10px 20px;
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        border: none;
        background: transparent;
        width: 100%;
        color: ${(props) => (props.color ? "#ffffff" : "var(--headertextcolor)")};
        border-radius: 8px;
        text-align: left;

        svg {
            transition: transform 0.3s ease;
        }

        &:hover {
            color: #fff;
            background-color: ${(props) =>
                    props.color ? "rgba(204, 85, 0, 0.5)" : "#FFA800"};
        }
    }

    /* 📌 Submenu */
    .links {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 999;
        min-width: 200px;
        border-radius: 0 8px 8px 8px;
        background-color: ${(props) =>
                props.color ? "rgba(204, 85, 0, 0.9)" : "#FFA800"};
        overflow: hidden;
        max-height: 0;
        opacity: 0;
        transition: all 0.3s ease;

        a {
            padding: 10px 20px;
            display: flex;
            align-items: center;
            font-size: 16px;
            line-height: 24px;
            color: #fff;

            &:hover {
                background: #fff;
                color: #000;
            }
        }
    }

    /* Hover orqali faqat desktopda ishlaydi */
    @media (min-width: 993px) {
        .menu-item:hover > .links {
            opacity: 1;
            max-height: 500px;
        }
    }

    /* 📱 Mobile */
    @media (max-width: 992px) {
        width: 100%;

        .menu-btn,
        .link {
            color: #fff;
            margin-top: 10px;
            background-color: ${(props) =>
                    props.color ? "rgba(204, 85, 0, 0.8)" : "rgba(204, 85, 0, 0.8)"};
            border-radius: 8px;
        }

        .links {
            position: static;
            width: 100%;
            background-color: burlywood;
            max-height: 0;
            opacity: 0;
            transition: all 0.3s ease;
        }

        .links.open {
            max-height: 800px; /* accordion effekt */
            opacity: 1;
        }

        .links a {
            padding-left: 30px;
            font-size: 16px;
        }
    }
`;
