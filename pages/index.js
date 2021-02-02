import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const postImageBg = {
    backgroundImage: 'url(assets/images/pexels-vincent-ma-janssen-2698475.jpg)'
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mb-30">
        <div className="row">

          <div className="col-lg-8 col-md-12">
            <div className="layout-2 white-padding mb-30">
              <div className="row">
                <div className="col-xl-4 col-md-12">
                  <h5 className="block-title">Trending News</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-md-12">
                  <div className="post-block-item style-3" style={postImageBg} >
                    <a href="archive.html" className="block-item-category">Politics</a>
                    <div className="post-block-thumb-content d-block">
                      <h2>
                        <a href="single.html">
                        5 Mind Numbing Facts About Politics. </a>
                      </h2>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#">
                          <img className="avatar rounded-circle" src="assets/images/acdbf3fcda4c1f108221a12844f087f0.jpeg" alt="5 Mind Numbing Facts About Politics." />
                          </a>
                          <span className="ml-2">Harry Olson</span>
                        </li>
                        <li className="list-inline-item">
                          <i className="fas fa-burn"></i>
                          <span>37 Views</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-12">
                  <div className="post-block-item style-1">
                    <div className="row">
                      <div className="my-auto col-5">
                        <div className="post-block-thumb">
                          <a href="single.html">
                          <img src="assets/images/pexels-luis-quintero-3892896-220x150.jpg" alt="img" />
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
                  </div>
                  <div className="post-block-item style-1">
                    <div className="row">
                      <div className="my-auto col-5">
                        <div className="post-block-thumb">
                          <a href="single.html">
                          <img src="assets/images/pexels-markus-spiske-2990617-220x150.jpg" alt="img" />
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
                  </div>
                  <div className="post-block-item style-1">
                    <div className="row">
                      <div className="my-auto col-5">
                        <div className="post-block-thumb">
                          <a href="single.html">
                          <img src="assets/images/pexels-christina-morillo-1181248-220x150.jpg" alt="img" />
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
                  </div>
                  <div className="post-block-item style-1">
                    <div className="row">
                      <div className="my-auto col-5">
                        <div className="post-block-thumb">
                          <a href="single.html">
                          <img src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-220x150.jpg" alt="img" />
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
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-30">
              <div className="col-md-6">
                <div className="white-padding">
                  <div className="row">
                    <div className="col-8">
                      <h5 className="block-title">Technology</h5>
                    </div>
                    <div className="col-4 text-right">
                      <a className="post-block-view-all" href="#">View All</a>
                    </div>
                  </div>
                  <div className="layout-3 5fd5fbdf2f3b1">
                    <div className="post-block-item style-4">
                      <div className="post-block-thumb-content d-block">
                        <a href="archive.html" className="block-item-category" /*style="background:#6360ff"*/>Technology</a>
                        <a href="single.html">
                        <img src="assets/images/pexels-christina-morillo-1181248-600x406.jpg" alt="img" />
                        </a>
                        <div className="post-block-content">
                          <h2>
                            <a href="single.html">
                            The Rank Of Technology In Consumers Market. </a>
                          </h2>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#">
                              <img className="avatar rounded-circle" src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="The Rank Of Technology In Consumers Market." />
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
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-220x150.jpg" alt="img" />
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
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/brian-mcgowan-lGNBGpFR4nQ-unsplash-220x150.jpg" alt="img" />
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
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/gabriel-porras-jZiYPLdGLKI-unsplash-220x150.jpg" alt="img" /> </a>
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
                        <img src="assets/images/pexels-victor-freitas-703012-600x406.jpg" alt="img" /> </a>
                        <div className="post-block-content">
                          <h2>
                            <a href="single.html">
                            The Rank Of Technology In Consumers Market. </a>
                          </h2>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#">
                              <img className="avatar rounded-circle" src="https://secure.gravatar.com/avatar/f71275f88816857574841b57a6f67aae?s=32&amp;d=mm&amp;r=g" alt="The Rank Of Technology In Consumers Market." />
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
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/brian-mcgowan-lGNBGpFR4nQ-unsplash-220x150.jpg" alt="img" /> </a>
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
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-220x150.jpg" alt="img" />
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
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/gabriel-porras-jZiYPLdGLKI-unsplash-220x150.jpg" alt="img" /> </a>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="white-padding mb-30">
              <div className="widget-three-tabs">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tab-one" aria-controls="tab-one">Popular</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-two" aria-controls="tab-two">Recent</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-three" aria-controls="tab-three">Comment</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/pexels-guduru-ajay-bhargav-863988-600x406.jpg" alt="img" /> </a>
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
                            <img src="assets/images/virul-weerasooriya-VnfqkxCSCrU-unsplash-220x150.jpg" alt="img" /> </a>
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
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/pexels-christina-morillo-1181248-220x150.jpg" alt="img" /> </a>
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
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/pexels-pixabay-248547-600x406.jpg" alt="img" /> </a>
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
                            <img src="assets/images/pexels-fauxels-3183197-600x406.jpg" alt="img" /> </a>
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
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/pexels-pixabay-248547-600x406.jpg" alt="img" /> </a>
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
                            <img src="assets/images/pexels-guduru-ajay-bhargav-863988-220x150.jpg" alt="img" /> </a>
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
                            <img src="assets/images/pexels-pixabay-209841-220x150.jpg" alt="img" /> </a>
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
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/pexels-pixabay-209933-220x150.jpg" alt="img" /> </a>
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
                    </div>
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/pexels-sebastian-voortman-804570-220x150.jpg" alt="img" /> </a>
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
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="tab-three">
                    <div className="post-block-item style-1">
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/pexels-pixabay-248547-600x406.jpg" alt="img" /> </a>
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
                            <img src="assets/images/georg-eiermann-Z4u4o-DhEzw-unsplash-220x150.jpg" alt="img" /> </a>
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
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/pexels-pixabay-257897-220x150.jpg" alt="img" /> </a>
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
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/pexels-christina-morillo-1181248-220x150.jpg" alt="img" /> </a>
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
                      <div className="row">
                        <div className="my-auto col-5">
                          <div className="post-block-thumb">
                            <a href="single.html">
                            <img src="assets/images/pexels-fauxels-3183197-600x406.jpg" alt="img" /> </a>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white-padding mb-30">
              <div className="weather">
                <div className="row">
                  <div className="col-6 text-center">
                    <div>
                      <a className="weather-icon">
                        <i className="fad fa-sun"></i>
                      </a>
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
          </div>

        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
          </div>
        </div>
      </footer>

    </div>
  )
}
