'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutManikSaha() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <article>
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Professor (Dr.) Manik Saha
            </h1>
            <p className="text-2xl text-blue-600 font-medium">
              Chief Minister of Tripura
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="prose prose-lg max-w-none md:w-3/5">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                Dr. Manik Saha, a distinguished dental surgeon turned politician, assumed office as the Chief Minister of Tripura in 2022. His journey from medical excellence to political leadership exemplifies his dedication to public service and commitment to the people of Tripura.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Born and raised in Tripura, Dr. Saha completed his dental surgery education and established himself as a renowned medical professional before entering politics. His academic background and experience in healthcare have significantly influenced his approach to governance and public welfare, bringing a unique perspective to state administration.
              </p>
            </div>

            <div className="md:w-2/5">
              <div className="relative h-[500px] w-full sticky top-4">
                <Image
                  src="/images/manik-saha.jpg"
                  alt="Dr. Manik Saha"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">Political Journey and Leadership</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Dr. Saha&apos;s political career has been marked by rapid ascension and significant achievements. After joining the BJP, he quickly rose through party ranks to become the State President of BJP Tripura. His dedication and leadership qualities led to his election to the Rajya Sabha in 2022, followed by his appointment as Chief Minister of Tripura in the same year. His effective governance and popular support resulted in his re-election as Chief Minister in 2023.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">Achievements and Vision</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Under Dr. Saha&apos;s leadership, Tripura has seen significant progress in various sectors. He has strengthened the healthcare infrastructure, leveraging his medical background to improve health services across the state. His administration has focused on educational development, promoting sustainable practices, and enhancing connectivity and infrastructure. Notable attention has been given to boosting tourism and preserving the rich cultural heritage of Tripura.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Looking ahead, Dr. Saha&apos;s vision for Tripura encompasses comprehensive development across multiple domains. His administration is committed to promoting industrial development and creating employment opportunities, ensuring inclusive growth and improved quality of life for all citizens, and developing world-class infrastructure and connectivity throughout the state.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
