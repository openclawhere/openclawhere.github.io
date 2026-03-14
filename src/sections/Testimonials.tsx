import { useRef, useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: '张伟',
    role: '科技爱好者',
    avatar: '/avatar-1.jpg',
    content: '作为一个科技发烧友，我尝试过不少AI宠物产品。小米CyberDog的开源特性让我印象深刻，可以自己编程实现各种功能，非常适合技术玩家。',
    rating: 5,
    product: '小米CyberDog',
  },
  {
    id: 2,
    name: '李娜',
    role: '年轻妈妈',
    avatar: '/avatar-2.jpg',
    content: '给孩子买了跃然创新的BubblePal，孩子非常喜欢。它不仅能陪孩子聊天，还能讲故事、教英语，简直是育儿神器！',
    rating: 5,
    product: '跃然创新BubblePal',
  },
  {
    id: 3,
    name: '王芳',
    role: '退休教师',
    avatar: '/avatar-3.jpg',
    content: '独居后买了日本卡西欧的Moflin，它的触感非常柔软，像真的小动物一样。每天回家看到它，心情都会变好。',
    rating: 5,
    product: '日本卡西欧Moflin',
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll, { passive: true });
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#4d67ff]/10 text-[#4d67ff] text-sm font-medium mb-4">
              用户评价
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333]">
              用户的<span className="text-gradient">真实反馈</span>
            </h2>
            <p className="mt-3 text-[#666666] max-w-lg">
              听听来自不同背景的用户分享他们的AI宠物使用体验
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-[#4d67ff] text-[#4d67ff] hover:bg-[#4d67ff] hover:text-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-[#4d67ff] text-[#4d67ff] hover:bg-[#4d67ff] hover:text-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[350px] lg:w-[400px] snap-start"
            >
              <div className="bg-gradient-to-br from-[#f8f9ff] to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full border border-gray-100">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#4d67ff]/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-[#4d67ff]" />
                </div>

                {/* Content */}
                <p className="text-[#666666] leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Product Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#4d67ff]/10 text-[#4d67ff] text-sm mb-6">
                  {testimonial.product}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-[#333333]">{testimonial.name}</div>
                    <div className="text-sm text-[#666666]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="flex-shrink-0 w-[350px] lg:w-[400px] snap-start">
            <div className="bg-gradient-to-br from-[#4d67ff] to-[#6b82ff] rounded-3xl p-8 shadow-lg h-full flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                分享你的体验
              </h3>
              <p className="text-white/80 mb-6">
                使用过AI电子宠物？分享你的真实感受，帮助更多人找到合适的伙伴
              </p>
              <button className="px-6 py-3 bg-white text-[#4d67ff] rounded-xl font-semibold hover:bg-white/90 transition-colors">
                写评价
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
