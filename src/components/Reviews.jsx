'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'The ultimate contractor tool!',
    body: '1099 Pro has completely changed how I manage my business. Invoicing, scheduling, and tax tracking all in one place—absolute game-changer!',
    author: 'FreelanceDoc',
    rating: 5,
  },
  {
    title: 'Tax season is finally stress-free.',
    body: 'I used to panic every tax season. Now, 1099 Pro keeps track of everything for me. My accountant is impressed, and I sleep better at night!',
    author: 'NoMoreTaxStress',
    rating: 5,
  },
  {
    title: 'Wish I found this sooner!',
    body: 'As a traveling nurse, keeping up with different facilities and payments was a nightmare. 1099 Pro makes it effortless!',
    author: 'NomadNurse',
    rating: 5,
  },
  {
    title: 'No more late invoices.',
    body: 'I used to forget to send invoices, and chasing payments was exhausting. Now, 1099 Pro automates it all. I get paid on time, every time.',
    author: 'OnTimePay',
    rating: 5,
  },
  {
    title: 'Perfect for busy healthcare pros.',
    body: 'Between patient care and paperwork, I had no time to manage my business properly. 1099 Pro takes care of the backend so I can focus on my work.',
    author: 'DrHustle',
    rating: 5,
  },
  {
    title: 'My financial lifesaver!',
    body: 'I had no idea how many deductions I was missing out on. 1099 Pro helped me save thousands in taxes this year!',
    author: 'MaxDeductions',
    rating: 5,
  },
  {
    title: 'I finally feel in control.',
    body: 'Keeping track of contracts and different pay rates used to be a mess. 1099 Pro organizes everything perfectly!',
    author: 'OrganizedMD',
    rating: 5,
  },
  {
    title: 'Better than an accountant!',
    body: 'I used to pay a bookkeeper just to keep my finances straight. Now, I do everything myself with 1099 Pro, and it’s actually easier!',
    author: 'DIYFinance',
    rating: 5,
  },
  {
    title: 'Super easy to use.',
    body: 'I was worried it would be complicated, but the app is so intuitive! If you’re a contractor, you NEED this app.',
    author: 'SimpleSolutions',
    rating: 5,
  },
  {
    title: 'I recommend it to everyone!',
    body: 'I’ve told all my colleagues about 1099 Pro. It’s hands-down the best tool for independent healthcare professionals.',
    author: 'WordOfMouth',
    rating: 5,
  },
  {
    title: 'I actually understand my finances now.',
    body: 'I never realized how much I was losing just by not keeping track. Now I know exactly where my money is going!',
    author: 'SmartSpender',
    rating: 5,
  },
  {
    title: 'Five stars isn’t enough.',
    body: 'This app is a must-have. Whether it’s scheduling, invoicing, or taxes, 1099 Pro makes everything easy.',
    author: 'SuperUser',
    rating: 5,
  },
  {
    title: 'Best investment I’ve made in my business.',
    body: 'I don’t see 1099 Pro as an expense—it’s an investment. I save so much time and money because of it.',
    author: 'ROIisReal',
    rating: 5,
  },
  {
    title: 'No more paperwork nightmares!',
    body: 'I used to drown in paperwork. Now everything is digital, organized, and accessible anywhere. Love it!',
    author: 'PaperlessPro',
    rating: 5,
  },
  {
    title: 'Just get it!',
    body: 'If you’re a 1099 healthcare worker, stop overthinking it. Download 1099 Pro and thank me later.',
    author: 'LifeChanger',
    rating: 5,
  },
];


function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-pine-green-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg/6 font-semibold before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Everyone is changing their business with <b>1099 Pro</b>.
        </h2>
        {/* <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of people have doubled their net-worth in the last 30 days.
        </p> */}
        <ReviewGrid />
      </Container>
    </section>
  )
}
