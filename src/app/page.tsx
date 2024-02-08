import Item from "@/components/Item";
import Social from "@/components/Social";
import { experience, projects, socials } from "@/lib/data";

export default function Home() {
  //create a new data object with working experience and projects and pass it to the Item component

  return (
    <div className=" mx-auto subpixel-antialiased text-base md:text-lg">
      <div className="md:max-w-[460px] m-8 md:m-28 text-neutral-700 dark:text-neutral-300">
        <div className="flex gap-x-4">
          <div className="flex flex-col">
            <h1 className="mt-[6px] font-semibold">Enes Kutlay</h1>
            <p className="leading-[25px] mt-8 text-neutral-500 dark:text-neutral-400 w-11/12">
              B. 2000, Bursa, Turkey. Currently, I&apos;m dedicated to learning
              mobile development and front-end technologies.
            </p>
            <p className="leading-[25px] mt-8 text-neutral-500 dark:text-neutral-400 w-11/12 lowercase">
              Previously, I studied at ecole42 and worked as an intern front-end
              developer at Path.
            </p>
            <p className="leading-[25px] mt-8 text-neutral-500 dark:text-neutral-400 w-11/12 lowercase">
              I&apos;m deeply passionate about self-learning in front-end
              development, with a focus on mastering ReactJs, React Native and
              NextJs.
            </p>
            <p className="leading-[25px] mt-8 text-neutral-500 dark:text-neutral-400 w-11/12 lowercase">
              Below, you can explore some of the open-source projects I&apos;ve
              developed and perhaps discover some of my written works, if
              available.
            </p>
            <Social socials={socials} />
          </div>
        </div>
        <div className="flex flex-col mt-12">
          <h2 className="text-neutral-500 dark:text-neutral-400 text-sm font-semibold lowercase font-samibold">
            experience
          </h2>
          <div className="mt-4">
            {experience.map((item) => (
              <Item
                key={item.id}
                itemName={item.company}
                itemTitle={item.title}
                itemDate={item.date}
                itemImage={item.img}
                itemHref={item.href}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-12">
          <h2 className="text-neutral-500 dark:text-neutral-400 text-sm font-semibold lowercase font-samibold">
            projects
          </h2>
          <div className="mt-4">
            {projects.map((item) => (
              <Item
                key={item.id}
                itemName={item.name}
                itemTitle={item.title}
                projectImage={item.img}
                itemTag={item.tag}
                itemHref={item.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
