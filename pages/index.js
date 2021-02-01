import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mt-30 mb-30">
        <div className="row posts-carousel-layout-8" data-slick='{"slidesToShow": , "slidesToScroll": }'>
          <div className="col">
            <div className="post-block-item style-1">
              <div className="row">
                <div className="my-auto col-4">
                  <div className="post-block-thumb">
                    <a href="single.html">
                    <img src="assets/images/loader.gif" data-src="assets/images/pexels-sebastian-coman-photography-3625373-220x150.jpg" alt="img" /> </a>
                    <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Food</a>
                  </div>
                </div>
                <div className="my-auto col-8">
                  <div className="post-block-content">
                    <div className="post-block-meta">
                      <span>August 22, 2020</span>
                    </div>
                    <h2><a href="single.html">Why Are Children So Obsessed With Food.</a></h2>
                  </div>
                </div>
              </div>
              <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="127">
              <i className="fas fa-search-plus"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="post-block-item style-1">
              <div className="row">
                <div className="my-auto col-4">
                  <div className="post-block-thumb">
                    <a href="single.html">
                    <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-257897-600x406.jpg" alt="img" /> </a>
                    <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Business</a>
                  </div>
                </div>
                <div className="my-auto col-8">
                  <div className="post-block-content">
                    <div className="post-block-meta">
                      <span>August 22, 2020</span>
                    </div>
                    <h2><a href="single.html">Simple Guidance For You In Business.</a></h2>
                  </div>
                </div>
              </div>
              <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="116">
              <i className="fas fa-search-plus"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="post-block-item style-1">
              <div className="row">
                <div className="my-auto col-4">
                  <div className="post-block-thumb">
                    <a href="single.html">
                    <img src="assets/images/loader.gif" data-src="assets/images/pexels-fauxels-3183197-600x406.jpg" alt="img" /> </a>
                    <a href="single.html" className="block-item-category" /*style="background:#ff9900"*/>Business</a>
                  </div>
                </div>
                <div className="my-auto col-8">
                  <div className="post-block-content">
                    <div className="post-block-meta">
                      <span>August 22, 2020</span>
                    </div>
                    <h2><a href="single.html">Ten Important Facts That You Should Know About B..</a></h2>
                  </div>
                </div>
              </div>
              <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="117">
              <i className="fas fa-search-plus"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="post-block-item style-1">
              <div className="row">
                <div className="my-auto col-4">
                  <div className="post-block-thumb">
                    <a href="single.html">
                    <img src="assets/images/loader.gif" data-src="assets/images/brian-mcgowan-gkpszAElZf8-unsplash-600x406.jpg" alt="img" /> </a>
                    <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                  </div>
                </div>
                <div className="my-auto col-8">
                  <div className="post-block-content">
                    <div className="post-block-meta">
                      <span>August 22, 2020</span>
                    </div>
                    <h2><a href="single.html">10 Secrets About Covid That Has Never Been Revea..</a></h2>
                  </div>
                </div>
              </div>
              <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="112">
              <i className="fas fa-search-plus"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="post-block-item style-1">
              <div className="row">
                <div className="my-auto col-4">
                  <div className="post-block-thumb">
                    <a href="single.html">
                    <img src="assets/images/loader.gif" data-src="assets/images/georg-eiermann-Z4u4o-DhEzw-unsplash-220x150.jpg" alt="img" /> </a>
                    <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                  </div>
                </div>
                <div className="my-auto col-8">
                  <div className="post-block-content">
                    <div className="post-block-meta">
                      <span>August 22, 2020</span>
                    </div>
                    <h2><a href="single.html">The Modern Rules Of Covid.</a></h2>
                  </div>
                </div>
              </div>
              <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="113">
              <i className="fas fa-search-plus"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="post-block-item style-1">
              <div className="row">
                <div className="my-auto col-4">
                  <div className="post-block-thumb">
                    <a href="single.html">
                    <img src="assets/images/loader.gif" data-src="assets/images/pexels-martin-damboldt-799091-220x150.jpg" alt="img" /> </a>
                    <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Business</a>
                  </div>
                </div>
                <div className="my-auto col-8">
                  <div className="post-block-content">
                    <div className="post-block-meta">
                      <span>August 22, 2020</span>
                    </div>
                    <h2><a href="single.html">5 Secrets That Experts Of Business Don&#8217;t W..</a></h2>
                  </div>
                </div>
              </div>
              <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="98">
              <i className="fas fa-search-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-30">
        <div className="white-padding">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="grid-container">
                <div className="grid-item">
                  <div className="banner-block-item style-1 " /*"background-image: url(assets/images/pexels-guduru-ajay-bhargav-863988.jpg); height: 610px"*/>
                    <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                    <div className="banner-block-content" /*style="padding: 30px"*/>
                      <h2>
                        <a href="single.html">
                        Sports Is Your Worst Enemy. 7 Ways To Defeat It </a>
                      </h2>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="single.html">
                          <img className="d-inline avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/48dc418ef002957c6c867cb40aa191cc?s=32&amp;d=mm&amp;r=g" alt="Sports Is Your Worst Enemy. 7 Ways To Defeat It" />
                          </a>
                          <span className="ml-2">David Parker</span>
                        </li>
                        <li className="list-inline-item">
                          <i className="fas fa-burn"></i>
                          <span>59 Views</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="155">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="grid-container mb-30">
                <div className="grid-item">
                  <div className="banner-block-item style-1 " /*style="background-image: url(assets/images/martin-sanchez-F6LoPfa75tQ-unsplash.jpg); height: 310px"*/>
                    <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                    <div className="banner-block-content" /*style="padding: 30px"*/>
                      <h2>
                        <a href="single.html">
                        What Will Covid Be Like In The Next 50 Years? </a>
                      </h2>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="single.html">
                          <img className="d-inline avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="What Will Covid Be Like In The Next 50 Years?" />
                          </a>
                          <span className="ml-2">Chenai Simon</span>
                        </li>
                        <li className="list-inline-item">
                          <i className="fas fa-burn"></i>
                          <span>41 Views</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="92">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="grid-container">
                    <div className="grid-item">
                      <div className="banner-block-item style-1 on-hover-action" /*style="background-image: url(assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash.jpg); height: 280px"*/>
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                        <div className="banner-block-content" /*style="padding: 30px"*/>
                          <h2>
                            <a href="single.html">
                            Five Things That Happen When You Are In Tec.. </a>
                          </h2>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="/#">
                              <img className="d-inline avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/acdbf3fcda4c1f108221a12844f087f0?s=32&amp;d=mm&amp;r=g" alt="Five Things That Happen When You Are In Technology." />
                              </a>
                              <span className="ml-2">Harry Olson</span>
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-burn"></i>
                              <span>52 Views</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="121">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="grid-container">
                    <div className="grid-item">
                      <div className="banner-block-item style-1 on-hover-action" /*style="background-image: url(assets/images/pexels-jess-vide-4601056.jpg); height: 280px"*/>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff4500"*/>Travel</a>
                        <div className="banner-block-content" /*style="padding: 30px"*/>
                          <h2>
                            <a href="single.html">
                            Everything You Need To Know About Travel. </a>
                          </h2>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="/#">
                              <img className="d-inline avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/acdbf3fcda4c1f108221a12844f087f0?s=32&amp;d=mm&amp;r=g" alt="Everything You Need To Know About Travel." />
                              </a>
                              <span className="ml-2">Harry Olson</span>
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-burn"></i>
                              <span>33 Views</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="146">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-30">
        <div className="white-padding">
          <div className="row widget-categories style-2" data-slick='{"slidesToShow": 6, "slidesToScroll": 3}'>
            <div className="category-item" /*style="background: url('assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash.jpg');"*/>
              <a href="archive.html">Technology</a>
            </div>
            <div className="category-item" /*style="background: url('assets/images/pexels-jess-vide-4601056.jpg');"*/>
              <a href="single.html">Travel</a>
            </div>
            <div className="category-item" /*style="background: url('assets/images/pexels-fauxels-3183197.jpg');"*/>
              <a href="archive.html">Business</a>
            </div>
            <div className="category-item" /*style="background: url('assets/images/georg-eiermann-Z4u4o-DhEzw-unsplash.jpg');"*/>
              <a href="archive.html">Covid 19</a>
            </div>
            <div className="category-item" /*style="background: url('assets/images/ave-calvar-r0In92YhRmo-unsplash.jpg');"*/>
              <a href="archive.html">Health</a>
            </div>
            <div className="category-item" /*style="background: url('assets/images/pexels-the-lazy-artist-gallery-999267.jpg');"*/>
              <a href="archive.html">Lifestyle</a>
            </div>
            <div className="category-item" /*style="background: url('assets/images/pexels-alexy-almond-3756498.jpg');"*/>
              <a href="archive.html">Food</a>
            </div>
            <div className="category-item" /*style="background: url('assets/images/pexels-rosemary-ketchum-1464219.jpg');"*/>
              <a href="archive.html">Politics</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-30">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="layout-2 white-padding mb-30">
              <div className="row">
                <div className="col-xl-4 col-md-12">
                  <h5 className="block-title">Trending News</h5>
                </div>
                <div className="col-xl-8 col-md-12">
                  <ul className="list-inline text-xl-right text-left mb-4 mb-xl-0">
                    <li className="list-inline-item">
                      <a href="/#" className="get-category-id" data-category="2,4,6,7,8,11," data-title-length="50">
                      All </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="get-category-id" data-category="2" data-title-length="50">Technology</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="get-category-id" data-category="4" data-title-length="50">Travel</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="get-category-id" data-category="6" data-title-length="50">Covid 19</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="get-category-id" data-category="7" data-title-length="50">Health</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="get-category-id" data-category="8" data-title-length="50">Lifestyle</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="get-category-id" data-category="11" data-title-length="50">Politics</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-md-12">
                  <div className="post-block-item style-3" /*style="background-image: url(assets/images/pexels-vincent-ma-janssen-2698475.jpg);"*/>
                    <a href="archive.html" className="block-item-category" /*style="background:#1298fc"*/>Politics</a>
                    <div className="post-block-thumb-content d-block">
                      <h2>
                        <a href="single.html">
                        5 Mind Numbing Facts About Politics. </a>
                      </h2>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="/#">
                          <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/acdbf3fcda4c1f108221a12844f087f0?s=32&amp;d=mm&amp;r=g" alt="5 Mind Numbing Facts About Politics." />
                          </a>
                          <span className="ml-2">Harry Olson</span>
                        </li>
                        <li className="list-inline-item">
                          <i className="fas fa-burn"></i>
                          <span>37 Views</span>
                        </li>
                      </ul>
                    </div>
                    <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="142">
                    <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-md-12">
                  <div className="post-block-item style-1">
                    <div className="row">
                      <div className="my-auto col-5">
                        <div className="post-block-thumb">
                          <a href="single.html">
                          <img src="assets/images/loader.gif" data-src="assets/images/pexels-luis-quintero-3892896-220x150.jpg" alt="img" />
                          </a>
                          <a href="archive.html" className="block-item-category" /*style="background:#1298fc"*/>Politics</a>
                        </div>
                      </div>
                      <div className="my-auto col-7">
                        <div className="post-block-content">
                          <div className="post-block-meta">
                            <span>August 22, 2020</span>
                          </div>
                          <h2><a href="single.html">Why You Should Not Go To Politics.</a></h2>
                        </div>
                      </div>
                    </div>
                    <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="136">
                    <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="post-block-item style-1">
                    <div className="row">
                      <div className="my-auto col-5">
                        <div className="post-block-thumb">
                          <a href="single.html">
                          <img src="assets/images/loader.gif" data-src="assets/images/pexels-markus-spiske-2990617-220x150.jpg" alt="img" />
                          </a>
                          <a href="archive.html" className="block-item-category" /*style="background:#1298fc"*/>Politics</a>
                        </div>
                      </div>
                      <div className="my-auto col-7">
                        <div className="post-block-content">
                          <div className="post-block-meta">
                            <span>August 22, 2020</span>
                          </div>
                          <h2><a href="single.html">Understanding The Background Of Politics.</a></h2>
                        </div>
                      </div>
                    </div>
                    <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="134">
                    <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="post-block-item style-1">
                    <div className="row">
                      <div className="my-auto col-5">
                        <div className="post-block-thumb">
                          <a href="single.html">
                          <img src="assets/images/loader.gif" data-src="assets/images/pexels-christina-morillo-1181248-220x150.jpg" alt="img" />
                          </a>
                          <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                        </div>
                      </div>
                      <div className="my-auto col-7">
                        <div className="post-block-content">
                          <div className="post-block-meta">
                            <span>August 22, 2020</span>
                          </div>
                          <h2><a href="single.html">The Rank Of Technology In Consumers Market.</a></h2>
                        </div>
                      </div>
                    </div>
                    <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="120">
                    <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="post-block-item style-1">
                    <div className="row">
                      <div className="my-auto col-5">
                        <div className="post-block-thumb">
                          <a href="single.html">
                          <img src="assets/images/loader.gif" data-src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-220x150.jpg" alt="img" />
                          </a>
                          <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                        </div>
                      </div>
                      <div className="my-auto col-7">
                        <div className="post-block-content">
                          <div className="post-block-meta">
                            <span>August 22, 2020</span>
                          </div>
                          <h2><a href="single.html">Five Things That Happen When You Are In Technolo..</a></h2>
                        </div>
                      </div>
                    </div>
                    <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="121">
                    <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="/#" className="white-padding mb-30">
            <img src="assets/images/loader.gif" data-src="assets/images/banner-880x150-1.png" alt="img" />
            </a>
            <div className="row mb-30">
              <div className="col-md-6">
                <div className="white-padding">
                  <div className="row">
                    <div className="col-8">
                      <h5 className="block-title">Technology</h5>
                    </div>
                    <div className="col-4 text-right">
                      <a className="post-block-view-all" href="/#">View All</a>
                    </div>
                  </div>
                  <div className="layout-3 5fd5fbdf2f3b1">
                    <div className="post-block-item style-4">
                      <div className="post-block-thumb-content d-block">
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-christina-morillo-1181248-600x406.jpg" alt="img" />
                        </a>
                        <div className="post-block-content">
                          <h2>
                            <a href="single.html">
                            The Rank Of Technology In Consumers Market. </a>
                          </h2>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="/#">
                              <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="The Rank Of Technology In Consumers Market." />
                              </a>
                              <span className="ml-2">Chenai Simon</span>
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-burn"></i>
                              <span>52 Views</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>Aenean in mi ut enim fringilla porta id eget nulla. Nulla rutrum nisl id nisl finibus, et...</p>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="120">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-220x150.jpg" alt="img" />
                            </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">Five Things That Happen When You Are In Technology.</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="121">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/brian-mcgowan-lGNBGpFR4nQ-unsplash-220x150.jpg" alt="img" />
                            </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>May 22, 2020</span>
                            </div>
                            <h2><a href="single.html">The 10 Common Stereotypes When It Comes To Technology.</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="97">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/gabriel-porras-jZiYPLdGLKI-unsplash-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>April 22, 2020</span>
                            </div>
                            <h2><a href="single.html">10 Reliable Sources To Learn About Technology.</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="88">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="white-padding">
                  <div className="row">
                    <div className="col-8">
                      <h5 className="block-title">Don't Miss</h5>
                    </div>
                    <div className="col-4 text-right">
                      <a className="post-block-view-all" href="https://themebing.com/html/newslab/indexb799.html?category_name=technology,">View All</a>
                    </div>
                  </div>
                  <div className="layout-3 5fd5fbdf2f3b1">
                    <div className="post-block-item style-4">
                      <div className="post-block-thumb-content d-block">
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-victor-freitas-703012-600x406.jpg" alt="img" /> </a>
                        <div className="post-block-content">
                          <h2>
                            <a href="single.html">
                            The Rank Of Technology In Consumers Market. </a>
                          </h2>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="/#">
                              <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="The Rank Of Technology In Consumers Market." />
                              </a>
                              <span className="ml-2">Chenai Simon</span>
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-burn"></i>
                              <span>52 Views</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>Aenean in mi ut enim fringilla porta id eget nulla. Nulla rutrum nisl id nisl finibus, et...</p>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="120">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/brian-mcgowan-lGNBGpFR4nQ-unsplash-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>May 22, 2020</span>
                            </div>
                            <h2><a href="single.html">The 10 Common Stereotypes When It Comes To Technology.</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="97">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-220x150.jpg" alt="img" />
                            </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">Five Things That Happen When You Are In Technology.</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="121">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/gabriel-porras-jZiYPLdGLKI-unsplash-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>April 22, 2020</span>
                            </div>
                            <h2><a href="single.html">10 Reliable Sources To Learn About Technology.</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="88">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white-padding mb-30">
              <div className="row">
                <div className="col-8">
                  <h5 className="block-title">Sports</h5>
                </div>
                <div className="col-4 text-right">
                  <a className="post-block-view-all" href="https://themebing.com/html/newslab/index8f6d.html?category_name=,sports,">View All</a>
                </div>
              </div>
              <div className="layout-4 5fd5fbdf34a3c">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-md-6">
                    <div className="post-block-item style-4">
                      <div className="post-block-thumb-content d-block">
                        <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-248547-600x406.jpg" alt="img" /> </a>
                        <div className="post-block-content">
                          <h2>
                            <a href="single.html">
                            If Sports Is So Bad, Why Don’t Statistics .. </a>
                          </h2>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="/#">
                              <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="If Sports Is So Bad, Why Don’t Statistics Show It?" />
                              </a>
                              <span className="ml-2">Chenai Simon</span>
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-burn"></i>
                              <span>49 Views</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="154">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="post-block-item style-4">
                      <div className="post-block-thumb-content d-block">
                        <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-guduru-ajay-bhargav-863988-600x406.jpg" alt="img" /> </a>
                        <div className="post-block-content">
                          <h2>
                            <a href="single.html">
                            Sports Is Your Worst Enemy. 7 Ways To Defeat It </a>
                          </h2>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="/#">
                              <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/48dc418ef002957c6c867cb40aa191cc?s=32&amp;d=mm&amp;r=g" alt="Sports Is Your Worst Enemy. 7 Ways To Defeat It" />
                              </a>
                              <span className="ml-2">David Parker</span>
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-burn"></i>
                              <span>59 Views</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="155">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white-padding">
              <div className="slideshow-gallery">
                <div className="slider-for">
                  <div className="slideshow-gallery-item">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/pexels-christina-morillo-1181248.jpg);"*/>
                      <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                      <div className="gallery-block-content">
                        <h2>
                          <a href="single.html">
                          The Rank Of Technology In Consumers Ma.. </a>
                        </h2>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="/#">
                            <img className="d-inline avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="The Rank Of Technology In Consumers Market." />
                            </a>
                            <span className="ml-2">Chenai Simon</span>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-burn"></i>
                            <span>52 Views</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash.jpg);"*/>
                      <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                      <div className="gallery-block-content">
                        <h2>
                          <a href="single.html">
                          Five Things That Happen When You Are I.. </a>
                        </h2>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="/#">
                            <img className="d-inline avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/acdbf3fcda4c1f108221a12844f087f0?s=32&amp;d=mm&amp;r=g" alt="Five Things That Happen When You Are In Technology." />
                            </a>
                            <span className="ml-2">Harry Olson</span>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-burn"></i>
                            <span>52 Views</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/brian-mcgowan-gkpszAElZf8-unsplash.jpg);"*/>
                      <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                      <div className="gallery-block-content">
                        <h2>
                          <a href="single.html">
                          10 Secrets About Covid That Has Never .. </a>
                        </h2>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="/#">
                            <img className="d-inline avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="10 Secrets About Covid That Has Never Been Revealed For The Past 50 Years." />
                            </a>
                            <span className="ml-2">Chenai Simon</span>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-burn"></i>
                            <span>39 Views</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/georg-eiermann-Z4u4o-DhEzw-unsplash.jpg);"*/>
                      <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                      <div className="gallery-block-content">
                        <h2>
                          <a href="single.html">
                          The Modern Rules Of Covid. </a>
                        </h2>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="/#">
                            <img className="d-inline avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/48dc418ef002957c6c867cb40aa191cc?s=32&amp;d=mm&amp;r=g" alt="The Modern Rules Of Covid." />
                            </a>
                            <span className="ml-2">David Parker</span>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-burn"></i>
                            <span>40 Views</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/pexels-cottonbro-5095901.jpg);"*/>
                      <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Lifestyle</a>
                      <div className="gallery-block-content">
                        <h2>
                          <a href="single.html">Why You Must Experience Lifestyle At L.. </a>
                        </h2>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="/#">
                            <img className="d-inline avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/acdbf3fcda4c1f108221a12844f087f0?s=32&amp;d=mm&amp;r=g" alt="Why You Must Experience Lifestyle At Least Once In Your Lifetime." />
                            </a>
                            <span className="ml-2">Harry Olson</span>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-burn"></i>
                            <span>31 Views</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/pexels-dmitry-zvolskiy-2062426.jpg);"*/>
                      <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Lifestyle</a>
                      <div className="gallery-block-content">
                        <h2>
                          <a href="single.html">
                          What&#8217;s So Trendy About Lifestyle.. </a>
                        </h2>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="/#">
                            <img className="d-inline avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/48dc418ef002957c6c867cb40aa191cc?s=32&amp;d=mm&amp;r=g" alt="What&#8217;s So Trendy About Lifestyle That Everyone Went Crazy Over It?" />
                            </a>
                            <span className="ml-2">David Parker</span>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-burn"></i>
                            <span>33 Views</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/pexels-nina-uhlikova-725255.jpg);"*/>
                      <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Lifestyle</a>
                      <div className="gallery-block-content">
                        <h2>
                          <a href="single.html">
                          Understand Lifestyle Before You Regret. </a>
                        </h2>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="/#">
                            <img className="d-inline avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="Understand Lifestyle Before You Regret." />
                            </a>
                            <span className="ml-2">Chenai Simon</span>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-burn"></i>
                            <span>29 Views</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-nav">
                  <div className="slideshow-gallery-item pl-2 pr-2">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/pexels-christina-morillo-1181248-260x146.jpg);"*/>
                      <div className="gallery-block-content">
                        <h5>The Rank Of Technology In Consumers Ma..</h5>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item pl-2 pr-2">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-260x146.jpg);"*/>
                      <div className="gallery-block-content">
                        <h5>Five Things That Happen When You Are I..</h5>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item pl-2 pr-2">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/brian-mcgowan-gkpszAElZf8-unsplash-260x146.jpg);"*/>
                      <div className="gallery-block-content">
                        <h5>10 Secrets About Covid That Has Never ..</h5>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item pl-2 pr-2">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/georg-eiermann-Z4u4o-DhEzw-unsplash-260x146.jpg);"*/>
                      <div className="gallery-block-content">
                        <h5>The Modern Rules Of Covid.</h5>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item pl-2 pr-2">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/pexels-cottonbro-5095901-260x146.jpg);"*/>
                      <div className="gallery-block-content">
                        <h5>Why You Must Experience Lifestyle At L..</h5>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item pl-2 pr-2">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/pexels-dmitry-zvolskiy-2062426-260x146.jpg);"*/>
                      <div className="gallery-block-content">
                        <h5>What&#8217;s So Trendy About Lifestyle..</h5>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-gallery-item pl-2 pr-2">
                    <div className="gallery-block-item style-1" /*style="background-image: url(assets/images/pexels-nina-uhlikova-725255-260x146.jpg);"*/>
                      <div className="gallery-block-content">
                        <h5>Understand Lifestyle Before You Regret.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="white-padding mb-30">
              <div className="row">
                <div className="col-md-6 mb-10">
                  <div className="social-network-item" /*style="background-color: #3B5998"*/>
                    <a href="/#">
                    <span className="row">
                    <span className="col-sm-3 my-auto">
                    <i aria-hidden="true" className="fab fa-facebook-f"></i> </span>
                    <span className="col-sm-9">
                    <span className="social-count mb-0">23902</span>
                    <span className="mb-0">Fans</span>
                    </span>
                    </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 mb-10">
                  <div className="social-network-item" /*style="background-color: #1DA1F2"*/>
                    <a href="/#">
                    <span className="row">
                    <span className="col-sm-3 my-auto">
                    <i aria-hidden="true" className="fab fa-twitter"></i> </span>
                    <span className="col-sm-9">
                    <span className="social-count mb-0">3445</span>
                    <span className="mb-0">Followers</span>
                    </span>
                    </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 mb-10">
                  <div className="social-network-item" /*style="background-color: #FF0000"*/>
                    <a href="/#">
                    <span className="row">
                    <span className="col-sm-3 my-auto">
                    <i aria-hidden="true" className="fab fa-youtube"></i> </span>
                    <span className="col-sm-9">
                    <span className="social-count mb-0">23548</span>
                    <span className="mb-0">Subscribers</span>
                    </span>
                    </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 mb-10">
                  <div className="social-network-item" /*style="background-color: #C32AA3"*/>
                    <a href="/#">
                    <span className="row">
                    <span className="col-sm-3 my-auto">
                    <i aria-hidden="true" className="fab fa-instagram"></i> </span>
                    <span className="col-sm-9">
                    <span className="social-count mb-0">9645</span>
                    <span className="mb-0">Followers</span>
                    </span>
                    </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="social-network-item" /*style="background-color: #BD081C"*/>
                    <a href="/#">
                    <span className="row">
                    <span className="col-sm-3 my-auto">
                    <i aria-hidden="true" className="fab fa-pinterest-p"></i> </span>
                    <span className="col-sm-9">
                    <span className="social-count mb-0">5798</span>
                    <span className="mb-0">Followers</span>
                    </span>
                    </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="social-network-item" /*style="background-color: #007BB5"*/>
                    <a href="/#">
                    <span className="row">
                    <span className="col-sm-3 my-auto">
                    <i aria-hidden="true" className="fab fa-linkedin-in"></i> </span>
                    <span className="col-sm-9">
                    <span className="social-count mb-0">34658</span>
                    <span className="mb-0">Followers</span>
                    </span>
                    </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="white-padding mb-30">
              <div className="widget-three-tabs">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="/#tab-one" aria-controls="tab-one">Popular</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="/#tab-two" aria-controls="tab-two">Recent</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="/#tab-three" aria-controls="tab-three">Comment</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-guduru-ajay-bhargav-863988-600x406.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">Sports Is Your Worst Enemy. 7 Ways To Defeat It</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="155">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">Five Things That Happen When You Are In Technolo..</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="121">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-christina-morillo-1181248-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">The Rank Of Technology In Consumers Market.</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="120">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-248547-600x406.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">If Sports Is So Bad, Why Don’t Statistics ..</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="154">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-fauxels-3183197-600x406.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Business</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">Ten Important Facts That You Should Know About B..</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="117">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-248547-600x406.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">If Sports Is So Bad, Why Don’t Statistics ..</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="154">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-guduru-ajay-bhargav-863988-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">Sports Is Your Worst Enemy. 7 Ways To Defeat It</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="155">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-209841-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">The Ultimate Guide To Sports</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="156">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-209933-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">Don’t Waste Time! 7 Facts Until You Reach ..</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="157">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-sebastian-voortman-804570-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">Apply These 7 Secret Techniques To Improve Sports</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="158">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="tab-three">
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-248547-600x406.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">If Sports Is So Bad, Why Don’t Statistics ..</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="154">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/georg-eiermann-Z4u4o-DhEzw-unsplash-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">The Modern Rules Of Covid.</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="113">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-257897-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Business</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">Simple Guidance For You In Business.</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="116">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-christina-morillo-1181248-220x150.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">The Rank Of Technology In Consumers Market.</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="120">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/loader.gif" data-src="assets/images/pexels-fauxels-3183197-600x406.jpg" alt="img" /> </a>
                            <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Business</a>
                          </div>
                        </div>
                        <div className="my-auto col-7">
                          <div className="post-block-content">
                            <div className="post-block-meta">
                              <span>August 22, 2020</span>
                            </div>
                            <h2><a href="single.html">Ten Important Facts That You Should Know About B..</a></h2>
                          </div>
                        </div>
                      </div>
                      <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="117">
                      <i className="fas fa-search-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white-padding mb-30">
              <div className="row">
                <div className="col-8">
                  <h5 className="block-title">Covid 19</h5>
                </div>
                <div className="col-4 text-right">
                  <a className="post-block-view-all" href="https://themebing.com/html/newslab/index8b83.html?category_name=covid-19,">View All</a>
                </div>
              </div>
              <div className="layout-3 5fd5fbdf40a8e">
                <div className="post-block-item style-4">
                  <div className="post-block-thumb-content d-block">
                    <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                    <a href="single.html">
                    <img src="assets/images/loader.gif" data-src="assets/images/brian-mcgowan-gkpszAElZf8-unsplash-600x406.jpg" alt="img" /> </a>
                    <div className="post-block-content">
                      <h2>
                        <a href="single.html">
                        10 Secrets About Covid That Has Never Been Revealed For The Past 50 .. </a>
                      </h2>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="/#">
                          <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="10 Secrets About Covid That Has Never Been Revealed For The Past 50 Years." />
                          </a>
                          <span className="ml-2">Chenai Simon</span>
                        </li>
                        <li className="list-inline-item">
                          <i className="fas fa-burn"></i>
                          <span>39 Views</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>Aenean in mi ut enim fringilla porta id eget nulla. Nulla rutrum nisl id nisl finibus, et...</p>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="112">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/georg-eiermann-Z4u4o-DhEzw-unsplash-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">The Modern Rules Of Covid.</a></h2>
                      </div>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="113">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="https://themebing.com/html/newslab/blog/what-will-covid-be-like-in-the-next-50-years//">
                        <img src="assets/images/loader.gif" data-src="assets/images/martin-sanchez-F6LoPfa75tQ-unsplash-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>April 22, 2020</span>
                        </div>
                        <h2><a href="https://themebing.com/html/newslab/blog/what-will-covid-be-like-in-the-next-50-years//">What Will Covid Be Like In The Next 50 Years?</a></h2>
                      </div>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="92">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="https://themebing.com/html/newslab/blog/5-brilliant-ways-to-advertise-covid//">
                        <img src="assets/images/loader.gif" data-src="assets/images/brian-mcgowan-GRPVRraeBGg-unsplash-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>April 22, 2020</span>
                        </div>
                        <h2><a href="https://themebing.com/html/newslab/blog/5-brilliant-ways-to-advertise-covid//">5 Brilliant Ways To Advertise Covid.</a></h2>
                      </div>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="84">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="white-padding mb-30">
              <div className="weather">
                <div className="row">
                  <div className="col-6 text-center">
                    <div>
                      <div className="weather-icon">
                        <i className="fad fa-sun"></i>
                      </div>
                    </div>
                    <h2 className="city-name">San Jose</h2>
                    <p>overcast clouds</p>
                  </div>
                  <div className="col-6">
                    <h2 className="weather-temp">10<sup>℃</sup></h2>
                    <p><i className="fad fa-fw fa-thermometer-three-quarters"></i>12º - 9º</p>
                    <p><i className="fad fa-fw fa-dewpoint"></i>81%</p>
                    <p><i className="fad fa-fw fa-wind"></i>2.1 km/h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="white-padding mb-30">
              <div className="row">
                <div className="col-8">
                  <h5 className="block-title">Don't Miss</h5>
                </div>
                <div className="col-4 text-right">
                  <a className="post-block-view-all" href="archive.html">View All</a>
                </div>
              </div>
              <div className="layout-3 5fd5fbdf9850e">
                <div className="post-block-item style-4">
                  <div className="post-block-thumb-content d-block">
                    <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                    <a href="single.html">
                    <img src="assets/images/loader.gif" data-src="assets/images/pexels-christina-morillo-1181248-600x406.jpg" alt="img" /> </a>
                    <div className="post-block-content">
                      <h2>
                        <a href="single.html">
                        The Rank Of Technology In Co.. </a>
                      </h2>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="/#">
                          <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="The Rank Of Technology In Consumers Market." />
                          </a>
                          <span className="ml-2">Chenai Simon</span>
                        </li>
                        <li className="list-inline-item">
                          <i className="fas fa-burn"></i>
                          <span>52 Views</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="120">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Five Things That Happen When..</a></h2>
                      </div>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="121">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/brian-mcgowan-gkpszAElZf8-unsplash-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">10 Secrets About Covid That ..</a></h2>
                      </div>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="112">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/georg-eiermann-Z4u4o-DhEzw-unsplash-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">The Modern Rules Of Covid.</a></h2>
                      </div>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="113">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-30">
        <div className="white-padding">
          <div className="row posts-carousel-layout-7" data-slick='{"slidesToShow": 4, "slidesToScroll": 2}'>
            <div className="col">
              <div className="post-block-item style-3" /*style="background-image: url(assets/images/pexels-sebastian-coman-photography-3625373.jpg);"*/>
                <a href="single.html" className="block-item-category" /*style="background:#ff3a3a"*/>Food</a>
                <div className="post-block-thumb-content d-block">
                  <h2>
                    <a href="single.html">
                    Why Are Children So Obsessed With Food. </a>
                  </h2>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="/#">
                      <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/acdbf3fcda4c1f108221a12844f087f0?s=32&amp;d=mm&amp;r=g" alt="Why Are Children So Obsessed With Food." />
                      </a>
                      <span className="ml-2">Harry Olson</span>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-burn"></i>
                      <span>38 Views</span>
                    </li>
                  </ul>
                </div>
                <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="127">
                <i className="fas fa-search-plus"></i>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="post-block-item style-3" /*style="background-image: url(assets/images/mostafa-meraji-IctzV5K5cwI-unsplash.jpg);"*/>
                <a href="single.html" className="block-item-category" /*style="background:#ff4500"*/>Travel</a>
                <div className="post-block-thumb-content d-block">
                  <h2>
                    <a href="single.html">
                    What Makes Travel So Addictive That You Never Wa.. </a>
                  </h2>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="/#">
                      <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="What Makes Travel So Addictive That You Never Want To Miss One?" />
                      </a>
                      <span className="ml-2">Chenai Simon</span>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-burn"></i>
                      <span>39 Views</span>
                    </li>
                  </ul>
                </div>
                <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="152">
                <i className="fas fa-search-plus"></i>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="post-block-item style-3" /*style="background-image: url(assets/images/pexels-pixabay-237272.jpg);"*/>
                <a href="single.html" className="block-item-category" /*style="background:#ff4500"*/>Travel</a>
                <div className="post-block-thumb-content d-block">
                  <h2>
                    <a href="archive.html">
                    Seven Ugly Truth About Travel. </a>
                  </h2>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="/#">
                      <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/48dc418ef002957c6c867cb40aa191cc?s=32&amp;d=mm&amp;r=g" alt="Seven Ugly Truth About Travel." />
                      </a>
                      <span className="ml-2">David Parker</span>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-burn"></i>
                      <span>36 Views</span>
                    </li>
                  </ul>
                </div>
                <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="144">
                <i className="fas fa-search-plus"></i>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="post-block-item style-3" /*style="background-image: url(assets/images/pexels-jess-vide-4601056.jpg);"*/>
                <a href="single.html" className="block-item-category" /*style="background:#ff4500"*/>Travel</a>
                <div className="post-block-thumb-content d-block">
                  <h2>
                    <a href="single.html">
                    Everything You Need To Know About Travel. </a>
                  </h2>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="/#">
                      <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/acdbf3fcda4c1f108221a12844f087f0?s=32&amp;d=mm&amp;r=g" alt="Everything You Need To Know About Travel." />
                      </a>
                      <span className="ml-2">Harry Olson</span>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-burn"></i>
                      <span>33 Views</span>
                    </li>
                  </ul>
                </div>
                <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="146">
                <i className="fas fa-search-plus"></i>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="post-block-item style-3" /*style="background-image: url(assets/images/ben-zxv4twrjN00-unsplash.jpg);"*/>
                <a href="single.html" className="block-item-category" /*style="background:#ff4500"*/>Travel</a>
                <div className="post-block-thumb-content d-block">
                  <h2>
                    <a href="single.html">
                    Why You Must Experience Travel At Least Once In .. </a>
                  </h2>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="/#">
                      <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="Why You Must Experience Travel At Least Once In Your Lifetime." />
                      </a>
                      <span className="ml-2">Chenai Simon</span>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-burn"></i>
                      <span>28 Views</span>
                    </li>
                  </ul>
                </div>
                <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="147">
                <i className="fas fa-search-plus"></i>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="post-block-item style-3" /*style="background-image: url(assets/images/ilona-bellotto-E-nxphmzmdo-unsplash.jpg);"*/>
                <a href="single.html" className="block-item-category" /*style="background:#ff4500"*/>Travel</a>
                <div className="post-block-thumb-content d-block">
                  <h2>
                    <a href="single.html">
                    15 Common Misconceptions About Travel. </a>
                  </h2>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="/#">
                      <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/acdbf3fcda4c1f108221a12844f087f0?s=32&amp;d=mm&amp;r=g" alt="15 Common Misconceptions About Travel." />
                      </a>
                      <span className="ml-2">Harry Olson</span>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-burn"></i>
                      <span>28 Views</span>
                    </li>
                  </ul>
                </div>
                <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="145">
                <i className="fas fa-search-plus"></i>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="post-block-item style-3" /*style="background-image: url(assets/images/dmitriy-frantsev-G0NA5GFEJIE-unsplash.jpg);"*/>
                <a href="single.html" className="block-item-category" /*style="background:#ff3a3a"*/>Food</a>
                <div className="post-block-thumb-content d-block">
                  <h2>
                    <a href="single.html">
                    Seven Facts About Food That Will Make You Think .. </a>
                  </h2>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="/#">
                      <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/48dc418ef002957c6c867cb40aa191cc?s=32&amp;d=mm&amp;r=g" alt="Seven Facts About Food That Will Make You Think Twice." />
                      </a>
                      <span className="ml-2">David Parker</span>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-burn"></i>
                      <span>29 Views</span>
                    </li>
                  </ul>
                </div>
                <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="128">
                <i className="fas fa-search-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-30">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="white-padding">
              <div className="popular-posts">
                <h5 className="block-title">Popular post</h5>
                <div className="post-block-item style-1">
                  <span className="count">1</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-guduru-ajay-bhargav-863988-600x406.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Sports Is Your Worst Enemy. 7 Ways To Defea..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <span className="count">2</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Five Things That Happen When You Are In Tec..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <span className="count">3</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-christina-morillo-1181248-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">The Rank Of Technology In Consumers Market.</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <span className="count">4</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-248547-600x406.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">If Sports Is So Bad, Why Don’t Statis..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <span className="count">5</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-fauxels-3183197-600x406.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Business</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Ten Important Facts That You Should Know Ab..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="white-padding">
              <div className="popular-posts">
                <h5 className="block-title">Most discussed</h5>
                <div className="post-block-item style-1">
                  <span className="count">1</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-248547-600x406.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">If Sports Is So Bad, Why Don’t Statis..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <span className="count">2</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/georg-eiermann-Z4u4o-DhEzw-unsplash-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">The Modern Rules Of Covid.</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <span className="count">3</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-257897-600x406.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Business</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Simple Guidance For You In Business.</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <span className="count">4</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-christina-morillo-1181248-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">The Rank Of Technology In Consumers Market.</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <span className="count">5</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-fauxels-3183197-600x406.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Business</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Ten Important Facts That You Should Know Ab..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="white-padding">
              <div className="popular-posts">
                <h5 className="block-title">Latest post</h5>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-luis-quintero-3892896-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#1298fc"*/>Politics</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Why You Should Not Go To Politics.</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/ben-zxv4twrjN00-unsplash-220x150.jpg" alt="img" /> </a>
                        <a href="single.html" className="block-item-category" /*style="background:#ff4500"*/>Travel</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>July 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Why You Must Experience Travel At Least Onc..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-cottonbro-5095901-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Lifestyle</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Why You Must Experience Lifestyle At Least ..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-sebastian-coman-photography-3625373-220x150.jpg" alt="img" /> </a>
                        <a href="single.html" className="block-item-category" /*style="background:#ff3a3a"*/>Food</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Why Are Children So Obsessed With Food.</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-dmitry-zvolskiy-2062426-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff9900"*/>Lifestyle</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">What’s So Trendy About Lifestyle That..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-100">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="white-padding">
              <div className="row">
                <div className="col-8">
                  <h5 className="block-title">Recent News</h5>
                </div>
              </div>
              <div className="layout-1 5fd5fbdfb093a">
                <div className="post-block-item style-2">
                  <div className="row">
                    <div className="col-lg-5 my-auto">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-christina-morillo-1181248-600x406.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                      </div>
                    </div>
                    <div className="col-lg-7 my-auto">
                      <div className="post-block-content">
                        <ul className="list-inline post-block-meta">
                          <li className="list-inline-item">
                            <a href="/#">
                            <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="The Rank Of Technology In Consumers Market." />
                            </a>
                            <span className="ml-2">Chenai Simon</span>
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-calendar-alt"></i>
                            <span className="pl-10 date">August 22, 2020</span>
                          </li>
                        </ul>
                        <h2><a href="single.html">The Rank Of Technology In Consumers Market.</a></h2>
                        <p>Aenean in mi ut enim fringilla porta id eget nulla. Nulla rutrum nisl id nisl finibus, et feugiat orci porta....</p>
                      </div>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="120">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
                <div className="post-block-item style-2">
                  <div className="row">
                    <div className="col-lg-5 my-auto">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-600x406.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                      </div>
                    </div>
                    <div className="col-lg-7 my-auto">
                      <div className="post-block-content">
                        <ul className="list-inline post-block-meta">
                          <li className="list-inline-item">
                            <a href="/#">
                            <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/acdbf3fcda4c1f108221a12844f087f0?s=32&amp;d=mm&amp;r=g" alt="Five Things That Happen When You Are In Technology." />
                            </a>
                            <span className="ml-2">Harry Olson</span>
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-calendar-alt"></i>
                            <span className="pl-10 date">August 22, 2020</span>
                          </li>
                        </ul>
                        <h2><a href="single.html">Five Things That Happen When You Are In Technology.</a></h2>
                        <p>Aenean in mi ut enim fringilla porta id eget nulla. Nulla rutrum nisl id nisl finibus, et feugiat orci porta....</p>
                      </div>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="121">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
                <div className="post-block-item style-2">
                  <div className="row">
                    <div className="col-lg-5 my-auto">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/brian-mcgowan-gkpszAElZf8-unsplash-600x406.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#03c63a"*/>Covid 19</a>
                      </div>
                    </div>
                    <div className="col-lg-7 my-auto">
                      <div className="post-block-content">
                        <ul className="list-inline post-block-meta">
                          <li className="list-inline-item">
                            <a href="/#">
                            <img className="avatar rounded-circle" src="assets/images/loader.gif" data-src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="10 Secrets About Covid That Has Never Been Revealed For The Past 50 Years." />
                            </a>
                            <span className="ml-2">Chenai Simon</span>
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-calendar-alt"></i>
                            <span className="pl-10 date">August 22, 2020</span>
                          </li>
                        </ul>
                        <h2><a href="single.html">10 Secrets About Covid That Has Never Been Revealed For The Past 50 ..</a></h2>
                        <p>Aenean in mi ut enim fringilla porta id eget nulla. Nulla rutrum nisl id nisl finibus, et feugiat orci porta....</p>
                      </div>
                    </div>
                  </div>
                  <a className="ajax-quick-view-popup" href="ajax-popup.html" data-post-id="112">
                  <i className="fas fa-search-plus"></i>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <a href="/#" className="ajax-load-more mt-3" data-ppp="3" data-post-count="20" data-title="1" data-title-length="70" data-columns=" " data-excerpt="on" data-excerpt-length="20" data-category="2,6,7,8,">Load More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="white-padding mb-30">
              <ul className="mb-0 list-unstyled widget-categories style-1">
                <li /*style="background: url('assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-340x96.jpg');"*/>
                  <a href="archive.html">Technology</a>
                </li>
                <li /*style="background: url('assets/images/pexels-jess-vide-4601056-340x96.jpg');"*/>
                  <a href="single.html">Travel</a>
                </li>
                <li /*style="background: url('assets/images/pexels-fauxels-3183197-340x96.jpg');"*/>
                  <a href="archive.html">Business</a>
                </li>
                <li /*style="background: url('assets/images/georg-eiermann-Z4u4o-DhEzw-unsplash-340x96.jpg');"*/>
                  <a href="archive.html">Covid 19</a>
                </li>
                <li /*style="background: url('assets/images/ave-calvar-r0In92YhRmo-unsplash-340x96.jpg');"*/>
                  <a href="archive.html">Health</a>
                </li>
              </ul>
            </div>
            <div className="white-padding">
              <img src="assets/images/loader.gif" data-src="assets/images/ads-370x315-1.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h5>International</h5>
              <ul>
                <li><a href="/#">Global Economy</a></li>
                <li><a href="/#">Celebrity News</a></li>
                <li><a href="/#">Conflicts</a></li>
                <li><a href="/#">Health & Fitness</a></li>
                <li><a href="/#">Politics</a></li>
                <li><a href="/#">Children’s Health</a></li>
                <li><a href="/#">Religion</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Most Viewed Posts</h5>
              <div className="popular-posts">
                <div className="post-block-item style-1">
                  <span className="count">1</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-guduru-ajay-bhargav-863988-600x406.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Sports Is Your Worst Enemy. 7 Ways ..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <span className="count">2</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Five Things That Happen When You Ar..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <span className="count">3</span>
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-christina-morillo-1181248-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">The Rank Of Technology In Consumers..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Recent posts</h5>
              <div className="popular-posts">
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-248547-600x406.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">If Sports Is So Bad, Why Don’t Statistics ..</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-guduru-ajay-bhargav-863988-600x406.jpg" alt="img" />
                        </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">Sports Is Your Worst Enemy. 7 Ways To Defeat It</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block-item style-1">
                  <div className="row">
                    <div className="my-auto col-5">
                      <div className="post-block-thumb">
                        <a href="single.html">
                        <img src="assets/images/loader.gif" data-src="assets/images/pexels-pixabay-209841-220x150.jpg" alt="img" /> </a>
                        <a href="archive.html" className="block-item-category" /*style="background:#ff3a3a"*/>Sports</a>
                      </div>
                    </div>
                    <div className="my-auto col-7">
                      <div className="post-block-content">
                        <div className="post-block-meta">
                          <span>August 22, 2020</span>
                        </div>
                        <h2><a href="single.html">The Ultimate Guide To Sports</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>About NewsLab</h5>
              <ul>
                <li>
                  <a href="/#">Contact Us</a>
                </li>
                <li>
                  <a href="/#">Terms And Conditions</a>
                </li>
                <li>
                  <a href="/#">About Us</a>
                </li>
                <li>
                  <a href="/#">Delivery Information</a>
                </li>
                <li>
                  <a href="/#">Advertise With Us</a>
                </li>
                <li>
                  <a href="/#">Ad Choices</a>
                </li>
                <li>
                  <a href="/#">Media Relations</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
