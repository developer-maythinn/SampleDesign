import { createGlobalStyle, ThemeProvider } from "styled-components";
import GlobalStyle from "/components/GlobalStyle";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};
import React, { Component } from "react";

class App extends Component {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }

  componentDidMount(){
  	let perfData = window.performance.timing,
  		EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
  		time = parseInt((EstimatedTime/1000)%100)*100

  	const timeOrigin = window.performance.timeOrigin,
  	durataion = Math.max(1000, parseInt((timeOrigin/1000)%100)*100 || 100)

  	const start = 0, end = 100
  	console.log(time, durataion)
  	animateValue(start, end, durataion)
  	function animateValue(start, end, duration) {
  		let range = end - start,
  			current = start,
  			increment = end > start ? 1 : -1,
  			stepTime = Math.abs(Math.floor(duration / range)),
  			loadingEl = document.querySelector('.loading'),
  			timeEl = document.querySelector('.loading-time')

  		let timer = setInterval(function() {
  			window.scrollTo(0, 0)
  			current += increment
  			timeEl.innerText = current + '%'
  			if (current == end) {
  				loadingEl.classList.add('hide')
  				clearInterval(timer)
  			}
  		}, stepTime)
  	}
  }
}
export default App;
