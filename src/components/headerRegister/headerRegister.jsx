import styled from "styled-components"
import imgLogo from "../../assets/img/logoOnfly.png"
import { Link } from "react-router-dom"

const Header = styled.header`
    background-color: white;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Moldura = styled.div`
    height: 40px;
    width: 60px;
`

const Logo = styled.img`
    widht: 100%;
    height: 100%;
`

export const HeaderRegister = () => {

    return (
        <>
            <Header>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Moldura>
                        <Logo src={imgLogo}></Logo>
                    </Moldura>
                </Link>
            </Header>
        </>
    )
}