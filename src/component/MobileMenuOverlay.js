// components/MobileMenuOverlay.jsx
"use client";

export default function MobileMenuOverlay({
    menuOpen,
    closeMenu,
    megaMenuData,
    activeLeftIndex,
    setActiveLeftIndex,
    activeMiddleIndex,
    setActiveMiddleIndex,
    activeLeftMenu,
    activeMiddleMenu,
    activeRightMenu,
    activeData,
    WEB_URL,
}) {
    return (
        <>
            <div
                className={`backdrop ${menuOpen ? "show" : ""}`}
                onClick={closeMenu}
            />

            <div
                className={`menu-overlay ${menuOpen ? "open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label="Main navigation"
            >
                <button
                    className="close-btn"
                    aria-label="Close menu"
                    onClick={closeMenu}
                >
                    <img src="/images/header/close-icon.svg" alt="Close menu" aria-hidden="true" />
                </button>

                <div className="hamburger-layout">
                    <aside className="menu-left">
                        <ul>
                            {megaMenuData.map((item, idx) => (
                                <li
                                    key={item.id}
                                    className={`menu-left-item ${activeLeftIndex === idx ? "active" : ""}`}
                                    onClick={() => {
                                        setActiveLeftIndex(idx);
                                        setActiveMiddleIndex(null);
                                    }}
                                >
                                    <Link
                                        href={
                                            item.url && item.url.includes('.pdf')
                                                ? item.url
                                                : WEB_URL + item.url
                                        }
                                        target={item?.target_blank ? '_blank' : '_self'}
                                        className="hambur_links"
                                        aria-label={`View ${item.title}`}
                                        onClick={(e) => {
                                            if (!item.url || item.url === "#") {
                                                e.preventDefault();
                                            } else {
                                                closeMenu();
                                            }
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <section className="menu-middle">
                        <div className="middle-title">
                            <ul>
                                {activeLeftMenu.children?.map((item, idx) => (
                                    <li
                                        key={item.id}
                                        className={activeMiddleIndex === idx ? "active" : ""}
                                        onMouseEnter={() => setActiveMiddleIndex(idx)}
                                    >
                                        <Link
                                            href={
                                                item.url && (item.url.includes('.pdf') || item?.target_blank)
                                                    ? item.url
                                                    : WEB_URL + item.url
                                            }
                                            className="hambur_link"
                                            onClick={() => {
                                                closeMenu();
                                            }}
                                            target={item?.target_blank ? "_blank" : "_self"}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <ul className="middle-submenu">
                            {activeMiddleMenu.children?.map((sub) => (
                                <li key={sub.id}>
                                    <Link
                                        href={WEB_URL + sub.url}
                                        onClick={() => {
                                            closeMenu();
                                        }}
                                    >
                                        {sub.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="menu-right">
                        <div className="right-inner h-100">
                            <div className="image-box">
                                <div className="first-content">
                                    {activeRightMenu?.first_section?.title && (
                                        <h1
                                            dangerouslySetInnerHTML={{
                                                __html: activeRightMenu?.first_section?.title,
                                            }}
                                        />
                                    )}
                                    {activeRightMenu.first_section?.subtitle && (
                                        <p>{activeRightMenu.first_section.subtitle}</p>
                                    )}

                                    {activeRightMenu.first_section?.link && (
                                        <Link
                                            href={WEB_URL + activeRightMenu.first_section.link}
                                            onClick={() => {
                                                closeMenu();
                                            }}
                                        >
                                            <img
                                                src="/images/header/banner-arrow.svg"
                                                alt="Arrow"
                                            />
                                        </Link>
                                    )}

                                    {activeRightMenu?.first_section?.image && (
                                        <div className="hamburger-section-img virtural-img">
                                            <Image
                                                className="hum-small"
                                                src={activeRightMenu?.first_section?.image}
                                                alt={"image"}
                                                fill
                                                style={{ objectFit: "cover" }}
                                            />

                                            <div className="items-menu_grp">
                                                <div className="items-menu_grp_cont">
                                                    {activeRightMenu?.first_section?.heading && (
                                                        <h4>
                                                            {activeRightMenu?.first_section?.heading}
                                                        </h4>
                                                    )}
                                                    {activeRightMenu?.first_section?.subheading && (
                                                        <p>
                                                            {activeRightMenu?.first_section?.subheading}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <Link
                                                href="#"
                                                className="links"
                                                aria-label={`View ${activeRightMenu?.first_section?.title}`}
                                                onClick={() => {
                                                    closeMenu();
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* <div className="hamburger-section-img virtural-img">
                        <Image
                          className="hum-small"
                          src={"/images/virtual-campus.png"}
                          alt={"image"}
                          fill
                          style={{ objectFit: "cover" }}
                        />

                        <div className="items-menu_grp">
                          <div className="items-menu_grp_cont">
                            <h4>Virtual campus</h4>
                            <p>Sed ut perspiciatis</p>
                          </div>
                        </div>
                      </div> */}
                                </div>

                                <div className="second-content">
                                    {activeRightMenu.second_section?.image && (
                                        <div className="hamburger-section-img">
                                            <Image
                                                src={activeRightMenu.second_section.image}
                                                alt={activeData.secondContent.alt}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                sizes="100vw"
                                            />

                                            <div className="vid-thumb-grp">
                                                {activeRightMenu.video_section?.video_url && (
                                                    <div className="vid-thumb-icon"></div>
                                                )}

                                                <div className="vid-thumb-cont">
                                                    {activeRightMenu.second_section?.title && (
                                                        <h6>{activeRightMenu.second_section?.title}</h6>
                                                    )}

                                                    {activeRightMenu.second_section?.subtitle && (
                                                        <h4>
                                                            {activeRightMenu.second_section?.subtitle}
                                                        </h4>
                                                    )}
                                                </div>
                                            </div>

                                            <Link
                                                href={
                                                    activeRightMenu.video_section?.video_url
                                                        ? activeRightMenu.video_section.video_url
                                                        : WEB_URL +
                                                        "leadership/jagadguru-sri-shivarathri-deshikendra-mahaswamiji"
                                                }
                                                className="links"
                                                aria-label={`View ${activeRightMenu.video_section?.video_url ? activeRightMenu.video_section.video_url : "Jagadguru Sri Shivarathri Deshikendra Mahaswamiji"}`}
                                                onClick={() => {
                                                    closeMenu();
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* <div className="hamburger-section-img">
                        <Image
                          src={"/images/header/humburger-second-banner.png"}
                          alt={"image"}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="100vw"
                        />

                        <div className="vid-thumb-grp">
                          <div className="vid-thumb-cont">
                            <h6>MESSAGE FROM CHANCELLOR</h6>

                            <h4>
                              JAGADGURU SRI SHIVARATHRI DESHIKENDRA MAHASWAMIJI
                            </h4>
                          </div>
                        </div>
                      </div> */}

                                    <div className="acresData">
                                        <span
                                            className="heading"
                                            dangerouslySetInnerHTML={{
                                                __html: activeRightMenu.second_section?.heading,
                                            }}
                                        />
                                        {activeRightMenu.second_section?.subheading && (
                                            <p>{activeRightMenu.second_section?.subheading}</p>
                                        )}
                                        {/* <p>
                          Campus Area of the social-educational-spritual
                          philosophy
                        </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}