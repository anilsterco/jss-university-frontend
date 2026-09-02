import Image from "next/image";

export default function FacilityFour({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "universityboasts") return null;

        const items = [...section.items].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0),
        );
        return (
          <section
            className="uni_boasts_rag_sec"
            key={`uniboasts-${sectionIndex}`}
          >
            <div className="container">
              {items.map((item, idx) => (
                <div key={idx}>
                  <div className="uni_bo_title">
                    {item.heading && <h4>{item.heading}</h4>}
                    {item.subheading && <p>{item.subheading}</p>}
                  </div>

                  <div className="uni_bo_topsec">
                    <div className="uni_b_imgsec">
                      <figure className="shine-effect img-full">
                        <Image
                          src="/images/about-page/uni_boa_main.webp"
                          alt="University Sports"
                          className="w-100"
                          loading="lazy"
                          width={800}
                          height={520}
                        />
                      </figure>
                    </div>

                    <div className="uni_bo_text">
                      {Array.isArray(item.desc) &&
                        item.desc.map((para, pidx) => (
                          <p key={pidx}>{para.desc}</p>
                        ))}
                    </div>
                  </div>
                  {Array.isArray(item.boxes) && item.boxes.length > 0 && (
                    <div className="uni_boa_grid">
                      {item.boxes.map((box, bidx) => (
                        <div className="uni_boa_itemse" key={bidx}>
                          {(box.image || box?.imageVideo?.length > 0) && (
                            <div style={{ flex: 1 }} className="image_col">
                              {(box.image || box?.imageVideo?.length > 0) && (
                                <div style={{ flex: 1 }} className="image_col">
                                  {box?.imageVideo?.length > 0 ? (
                                    box.imageVideo.length === 1 ? (
                                      // Single media item
                                      <figure className="shine-effect img-full">
                                        {box.imageVideo[0].video ? (
                                          <video
                                            src={box.imageVideo[0].video}
                                            width={446}
                                            height={300}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            style={{
                                              // height: "auto",
                                              objectFit: "cover",
                                            }}
                                          />
                                        ) : (
                                          <Image
                                            src={box.imageVideo[0].image}
                                            alt={
                                              box.title
                                                ? box.title.slice(0, 50)
                                                : "Research Lab"
                                            }
                                            width={446}
                                            height={300}
                                            loading="lazy"
                                            style={{
                                              // width: "100%",
                                              objectFit: "cover",
                                            }}
                                          />
                                        )}
                                      </figure>
                                    ) : (
                                      // Multiple media items → Swiper
                                      <div
                                        className="research_swiper_wrapper"
                                        style={{ position: "relative" }}
                                      >
                                        <Swiper
                                          modules={[Autoplay, Navigation]}
                                          autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                          }}
                                          navigation={{
                                            nextEl: `.swiper-next-lab-card`,
                                            prevEl: `.swiper-prev-lab-card`,
                                          }}
                                          loop={true}
                                          slidesPerView={1}
                                        >
                                          {box.imageVideo.map(
                                            (media, mediaIdx) => (
                                              <SwiperSlide key={mediaIdx}>
                                                <figure className="shine-effect img-full">
                                                  {media.video ? (
                                                    <video
                                                      src={media.video}
                                                      width={446}
                                                      height={300}
                                                      autoPlay
                                                      muted
                                                      loop
                                                      playsInline
                                                      style={{
                                                        // width: "100%",
                                                        // height: "auto",
                                                        objectFit: "cover",
                                                      }}
                                                    />
                                                  ) : (
                                                    <Image
                                                      src={media.image}
                                                      alt={
                                                        box.title
                                                          ? box.title.slice(
                                                              0,
                                                              50,
                                                            )
                                                          : "Research Lab"
                                                      }
                                                      width={446}
                                                      height={300}
                                                      loading="lazy"
                                                      style={{
                                                        // width: "100%",
                                                        // height: "auto",
                                                        objectFit: "cover",
                                                      }}
                                                    />
                                                  )}
                                                </figure>
                                              </SwiperSlide>
                                            ),
                                          )}
                                        </Swiper>

                                        {/* Unique nav buttons per slide instance */}
                                        <button
                                          type="button"
                                          className={`swiper-button-prev swiper-prev-lab-card`}
                                          aria-label="Previous slide"
                                        >
                                          <MdChevronLeft />
                                        </button>
                                        <button
                                          type="button"
                                          className={`swiper-button-next swiper-next-lab-card`}
                                          aria-label="Next slide"
                                        >
                                          <MdChevronRight />
                                        </button>
                                      </div>
                                    )
                                  ) : box?.image ? (
                                    <figure className="shine-effect img-full">
                                      <Image
                                        src={box.image}
                                        alt={
                                          box.title
                                            ? box.title.replace(/<[^>]+>/g, "")
                                            : "Early Growth"
                                        }
                                        className="imgsli_left"
                                        width={446}
                                        height={300}
                                        loading="lazy"
                                        style={{
                                          // height: "100%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </figure>
                                  ) : null}
                                </div>
                              )}
                            </div>
                          )}

                          {/* <figure className="shine-effect img-full">
                            <Image
                              src={box.image}
                              alt={box.title}
                              className="w-100"
                              width={446}
                              height={300}
                          loading="lazy"
                            />
                          </figure> */}
                          <figcaption>
                            <p>{box.title}</p>
                          </figcaption>
                          {/* <Link
                            href="javascript:void(0)"
                            className="page_link"
                          ></Link> */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
