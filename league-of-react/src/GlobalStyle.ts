import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: myfont;
    src: url('./assets/fonts/Friz Quadrata Regular.ttf'),format('ttf');
}

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:'Montserrat', sans-serif;


        li{
            list-style-type: style none;
        }

        a{
            text-decoration:none;
            color: whitesmoke;
        }

        body{
            background-image: url("https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-2560x1440-8324.png");
            background-position: top;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-blend-mode: darken;
        }

        button{
            background-color: transparent;
            border: none;
            cursor: pointer;
        }

}

  
    

`;
