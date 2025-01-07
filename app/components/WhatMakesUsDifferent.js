import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function WhatMakesUsDifferent() {
  const differences = [
    'Every child has the potential to learn and excel',
    'Regard the prior knowledge and experience of the child',
    'Linking the learning process to everyday experience',
    'We take families and parents as our principal partners',
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What Makes Us <span style={{ color: '#1C74BB' }}>Different</span>
        </h2>

        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 max-w-2xl order-1 lg:order-2">
            <div className="relative w-full h-72 lg:h-96">
              <Image
                src="/images/SKA-102.jpg"
                alt="What Makes Us Different"
                layout="fill"
                className="rounded-lg object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 max-w-2xl order-2 lg:order-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differences.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}