import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>

        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="assets/images/thumbnail-32x32.png" sizes="32x32" />
          <link rel="icon" href="assets/images/thumbnail-192x192.png" sizes="192x192" />
          <link rel="apple-touch-icon" href="assets/images/thumbnail-180x180.png" />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700%2C800%7CPoppins%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800%2C900%7CRoboto%3A100%2C300%2C400%2C500%2C700%2C900' />
          <link rel="stylesheet" href="assets/css/plugins.css" />
          <link rel="stylesheet" href="assets/css/default.css" />
          <link rel="stylesheet" href="assets/css/color.css" />
          <link rel="stylesheet" href="assets/css/style.css" />
        </Head>

        <body>

          <div id="preloader">
            <div className="spinner">
              <div className="uil-ripple-css">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="bg-white d-none d-lg-block">
            <div className="top-header">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p className="float-left mr-3"><i className="fal fa-calendar-alt mr-2"></i>Sunday, 13 December, 2020</p>
                    <div className="float-left mr-3">|</div>
                    <ul id="menu-top-header" className="menu">
                      <li className="menu-item"><a href="blog.html">News</a></li>
                      <li className="menu-item"><a href="contact.html">Contact</a></li>
                      <li className="menu-item"><a href="archive.html">Technology</a></li>
                      <li className="menu-item"><a href="archive.html">Business</a></li>
                      <li className="menu-item"><a href="archive.html">Covid 19</a></li>
                    </ul>
                  </div>
                  <div className="col">
                    <div className="header-social">
                      <a className="facebook-f" href="index.html#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="twitter" href="index.html#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="instagram" href="index.html#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="linkedin-in" href="index.html#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 my-auto d-none d-lg-block">
                  <div className="logo">
                    <a href="index.html" className="custom-logo-link" rel="home" aria-current="page"><img src="assets/images/logo.png" className="custom-logo" alt="NewsLab" /></a>
                  </div>
                </div>
                <div className="col-lg-8 my-auto d-none d-lg-block">
                  <a href="index.html#" className="float-right">
                    <img src="assets/images/loader.gif" data-src="assets/images/banner-728x90-black.jpg" alt="NewsLab" />
                  </a>
                </div>
              </div>
            </div>
            <header className="site-header">
              <div className="navbar-menu ">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-11  my-auto">
                      <div className="primary-menu d-none d-lg-inline-block">
                        <nav className="desktop-menu">
                          <ul id="menu-primary-menu" className="mb-0 pl-0">
                            <li className="menu-item current_page_parent"><a href="index.html">Home</a></li>
                            <li className="menu-item"><a href="blog.html">News</a></li>
                            <li className="menu-item">
                              <a href="archive.html" className="dropdown-mega-menu-toggle">Technology</a>
                              <div className="mega-menu-content">
                                <div className="layout-5">
                                  <div className="row">
                                    <div className="col-md-2">
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="index.html#" className="get-left-category-id active" data-category="2,5,6,7,8," data-title-length="50">
                                          All </a>
                                        </li>
                                        <li>
                                          <a href="archive.html" className="get-left-category-id" data-category="2" data-title-length="50">Technology</a>
                                        </li>
                                        <li>
                                          <a href="archive.html" className="get-left-category-id" data-category="5" data-title-length="50">Business</a>
                                        </li>
                                        <li>
                                          <a href="archive.html" className="get-left-category-id" data-category="6" data-title-length="50">Covid 19</a>
                                        </li>
                                        <li>
                                          <a href="archive.html" className="get-left-category-id" data-category="7" data-title-length="50">Health</a>
                                        </li>
                                        <li>
                                          <a href="archive.html" className="get-left-category-id" data-category="8" data-title-length="50">Lifestyle</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-md-10">
                                      <div className="row">
                                        <div className="col-lg-3">
                                          <div className="post-block-item style-5">
                                            <a href="single.html">
                                              <img src="assets/images/loader.gif" data-src="assets/images/pexels-christina-morillo-1181248-600x406.jpg" alt="img" />
                                            </a>
                                            <div className="post-block-thumb-content d-block">
                                              <h2>
                                                <a href="single.html">The Rank Of Technology In Consumers Market. </a>
                                              </h2>
                                            </div>
                                            <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="120">
                                            <i className="fas fa-search-plus"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col-lg-3">
                                          <div className="post-block-item style-5">
                                            <a href="single.html">
                                            <img src="assets/images/loader.gif" data-src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-600x406.jpg" alt="img" /> </a>
                                            <div className="post-block-thumb-content d-block">
                                              <h2>
                                                <a href="single.html">
                                                Five Things That Happen When You Are In Technolo.. </a>
                                              </h2>
                                            </div>
                                            <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="121">
                                            <i className="fas fa-search-plus"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col-lg-3">
                                          <div className="post-block-item style-5">
                                            <a href="single.html">
                                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-257897-600x406.jpg" alt="img" />
                                            </a>
                                            <div className="post-block-thumb-content d-block">
                                              <h2>
                                                <a href="single.html">
                                                Simple Guidance For You In Business. </a>
                                              </h2>
                                            </div>
                                            <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="116">
                                            <i className="fas fa-search-plus"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col-lg-3">
                                          <div className="post-block-item style-5">
                                            <a href="single.html">
                                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-fauxels-3183197-600x406.jpg" alt="img" /> </a>
                                            <div className="post-block-thumb-content d-block">
                                              <h2>
                                                <a href="single.html">
                                                Ten Important Facts That You Should Know About B.. </a>
                                              </h2>
                                            </div>
                                            <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="117">
                                            <i className="fas fa-search-plus"></i>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="menu-item"><a href="archive.html">Travel</a></li>
                            <li className="menu-item"><a href="archive.html">Business</a></li>
                            <li className="menu-item">
                              <a href="archive.html" className="dropdown-mega-menu-toggle">Sports</a>
                              <div className="mega-menu-content">
                                <div className="layout-6">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <ul className="list-inline">
                                        <li className="list-inline-item">
                                          <a href="index.html#" className="get-horizontal-category-id active" data-category="2,5,6,7,8," data-title-length="50">
                                          All </a>
                                        </li>
                                        <li className="list-inline-item">
                                          <a href="archive.html" className="get-horizontal-category-id" data-category="2" data-title-length="50">Technology</a>
                                        </li>
                                        <li className="list-inline-item">
                                          <a href="archive.html" className="get-horizontal-category-id" data-category="5" data-title-length="50">Business</a>
                                        </li>
                                        <li className="list-inline-item">
                                          <a href="archive.html" className="get-horizontal-category-id" data-category="6" data-title-length="50">Covid 19</a>
                                        </li>
                                        <li className="list-inline-item">
                                          <a href="archive.html" className="get-horizontal-category-id" data-category="7" data-title-length="50">Health</a>
                                        </li>
                                        <li className="list-inline-item">
                                          <a href="archive.html" className="get-horizontal-category-id" data-category="8" data-title-length="50">Lifestyle</a>
                                        </li>
                                      </ul>
                                      <div className="row">
                                        <div className="col">
                                          <div className="post-block-item style-5">
                                            <a href="single.html">
                                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-christina-morillo-1181248-600x406.jpg" alt="img" />
                                            </a>
                                            <div className="post-block-thumb-content d-block">
                                              <h2>
                                                <a href="single.html">
                                                The Rank Of Technology In Consumers Market. </a>
                                              </h2>
                                            </div>
                                            <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="120">
                                            <i className="fas fa-search-plus"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div className="post-block-item style-5">
                                            <a href="single.html">
                                            <img src="assets/images/loader.gif" data-src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-600x406.jpg" alt="img" /> </a>
                                            <div className="post-block-thumb-content d-block">
                                              <h2>
                                                <a href="single.html">
                                                Five Things That Happen When You Are In Technolo.. </a>
                                              </h2>
                                            </div>
                                            <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="121">
                                            <i className="fas fa-search-plus"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div className="post-block-item style-5">
                                            <a href="single.html">
                                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-257897-600x406.jpg" alt="img" />
                                            </a>
                                            <div className="post-block-thumb-content d-block">
                                              <h2>
                                                <a href="single.html">
                                                Simple Guidance For You In Business. </a>
                                              </h2>
                                            </div>
                                            <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="116">
                                            <i className="fas fa-search-plus"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div className="post-block-item style-5">
                                            <a href="single.html">
                                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-fauxels-3183197-600x406.jpg" alt="img" />
                                            </a>
                                            <div className="post-block-thumb-content d-block">
                                              <h2>
                                                <a href="single.html">
                                                Ten Important Facts That You Should Know About B.. </a>
                                              </h2>
                                            </div>
                                            <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="117">
                                            <i className="fas fa-search-plus"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div className="post-block-item style-5">
                                            <a href="single.html">
                                            <img src="assets/images/loader.gif" data-src="assets/images/brian-mcgowan-gkpszAElZf8-unsplash-600x406.jpg" alt="img" /> </a>
                                            <div className="post-block-thumb-content d-block">
                                              <h2>
                                                <a href="single.html">
                                                10 Secrets About Covid That Has Never Been Revea.. </a>
                                              </h2>
                                            </div>
                                            <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="112">
                                            <i className="fas fa-search-plus"></i>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="menu-item"><a href="archive.html">Covid 19</a></li>
                            <li className="menu-item"><a href="archive.html">Health</a></li>
                            <li className="menu-item"><a href="archive.html">Lifestyle</a></li>
                            <li className="menu-item"><a href="archive.html">Food</a></li>
                            <li className="menu-item"><a href="archive.html">Politics</a></li>
                            <li className="menu-item"><a href="contact.html">Contact</a></li>
                            <li className="menu-item"><a href="index.html#">Buy Now</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="header-search text-right">
                        <a href="index.html#">
                        <i className="fas fa-search"></i>
                        </a>
                        <div className="search-form">
                          <form className="search-form" action="index.html#">
                            <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="Search &hellip;" name="s" />
                            </label>
                            <input type="submit" className="search-submit" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div className="bg-white">
            <div className="off-canvas-menu-bar">
              <div className="container">
                <div className="row">
                  <div className="col-6 my-auto">
                    <a href="index.html" className="custom-logo-link" rel="home" aria-current="page"><img src="assets/images/logo.png" className="custom-logo" alt="NewsLab" /></a>
                  </div>
                  <div className="col-6">
                    <div className="mobile-nav-toggler"><span className="far fa-fw fa-bars"></span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="off-canvas-menu">
              <div className="menu-backdrop"></div>
              <i className="close-btn fa fa-close"></i>
              <nav className="mobile-nav">
                <div className="text-center pt-3 pb-3">
                  <a href="index.html" className="custom-logo-link" rel="home" aria-current="page"><img width="512" height="173" src="assets/images/loader.gif" data-src="assets/images/logo.png" className="custom-logo" alt="NewsLab" /></a>
                </div>
                <ul className="navigation">
                </ul>
              </nav>
            </div>
          </div>

          <Main />
          <NextScript />

          <div id="backtotop"><i className="fal fa-lg fa-arrow-up"></i></div>
          <script src="assets/js/plugins.js"></script>
          <script src="assets/js/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument