import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Metadata } from 'next';
import {
  Cpu,
  Users,
  Building2,
  MapPinned,
} from 'lucide-react';
import { cityGroups, getAllUniversityInfos } from '@/lib/data/universities';
import type { UniversityInfo } from '@/lib/data/universities';
import { getPartners, getStats } from '@/lib/data';
import type { Locale } from '@/i18n/routing';

export const metadata: Metadata = {
  title: '社群生态 | 「冻土回声」',
  description:
    '东北高校游戏开发社团联盟 — 覆盖哈尔滨、长春、沈阳、大连、阜新、吉林市 6 座城市的 20+ 所高校',
};

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-ice-100/30 bg-ice-100/10 px-2.5 py-1 text-xs font-medium text-ice-200">
      <Cpu className="h-3 w-3" />
      {skill}
    </span>
  );
}

function ClubCard({
  club,
  locale,
}: {
  club: UniversityInfo;
  locale: string;
}) {
  const isZh = locale === 'zh';
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-ice-100/15 bg-tundra-950/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-ice-100/40 hover:bg-tundra-950/80 hover:shadow-lg hover:shadow-ice-100/5">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-stone-100">
            {club.name}
          </h3>
          <p className="mt-1 text-sm text-stone-400">
            {isZh ? club.school : club.schoolEn}
          </p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ice-100/10 text-sm font-bold text-ice-200">
          {((isZh ? club.name : club.nameEn) || '').charAt(0)}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {club.skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function CitySection({
  city,
  cityEn,
  description,
  descriptionEn,
  clubs,
  locale,
}: {
  city: string;
  cityEn: string;
  description: string;
  descriptionEn: string;
  clubs: UniversityInfo[];
  locale: string;
}) {
  const isZh = locale === 'zh';
  return (
    <section className="mb-16">
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <h2 className="section-label text-3xl font-bold text-stone-100">
            {isZh ? city : cityEn}
          </h2>
          <span className="rounded-full bg-ice-100/15 px-3 py-0.5 text-xs font-medium text-ice-200">
            {clubs.length} {isZh ? '个社团' : 'clubs'}
          </span>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-400">
          {isZh ? description : descriptionEn}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} locale={locale} />
        ))}
      </div>
    </section>
  );
}

export default function CommunityPage() {
  const t = useTranslations('community');
  const locale = useLocale();
  const isZh = locale === 'zh';

  const allClubs = getAllUniversityInfos();
  const stats = getStats();
  const partners = getPartners(locale as Locale);

  const communityStats = [
    {
      icon: <Users className="h-6 w-6 text-ice-200" />,
      value: `${stats.members}+`,
      label: isZh ? '社群成员' : 'Community Members',
    },
    {
      icon: <MapPinned className="h-6 w-6 text-ice-200" />,
      value: `${stats.regionalProfessionals}+`,
      label: isZh ? '地区从业者' : 'Regional Professionals',
    },
    {
      icon: <Building2 className="h-6 w-6 text-ice-200" />,
      value: `${stats.universities}+`,
      label: isZh ? '联盟高校' : 'Alliance Universities',
    },
  ];

  return (
    <main className="mx-auto max-w-[1480px] px-4 py-16 sm:px-6 lg:px-10">
      {/* Header */}
      <section className="mb-20 text-center">
        <span className="section-label text-sm font-medium tracking-widest text-ice-200">
          {isZh ? '社群生态' : 'COMMUNITY'}
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-100 sm:text-5xl">
          {isZh
            ? '东北高校游戏开发社团联盟'
            : 'Northeast University Game Dev Club Alliance'}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-400">
          {isZh
            ? '覆盖哈尔滨、长春、沈阳、大连、阜新、吉林市 6 座城市，联合 20 余所高校，通过 16 个游戏开发社团构建东北高校独立游戏开发生态网络，致力于为东北地区的独立游戏开发者提供展示与交流的平台。'
            : 'Covering 6 cities — Harbin, Changchun, Shenyang, Dalian, Fuxin, and Jilin City — uniting 20+ universities through 16 game development clubs to build an indie game development ecosystem network across Northeast China, dedicated to providing a showcase and networking platform for indie game developers.'}
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {communityStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-ice-100/15 bg-tundra-950/60 p-5 sm:p-6 backdrop-blur-sm min-w-0">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-xl sm:text-2xl font-bold text-stone-100 whitespace-nowrap">
                {stat.icon}
                <span>{stat.value}</span>
              </div>
              <div className="mt-2 text-xs font-medium tracking-wide text-stone-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-stone-500">
          {isZh
            ? `联盟现覆盖 ${cityGroups.length} 座城市、${allClubs.length} 个游戏开发社团。`
            : `The alliance currently spans ${cityGroups.length} cities and ${allClubs.length} game development clubs.`}
        </p>
      </section>

      {/* City Groups */}
      {cityGroups.map((group) => (
        <CitySection
          key={group.city}
          city={group.city}
          cityEn={group.cityEn}
          description={group.description}
          descriptionEn={group.descriptionEn}
          clubs={group.clubs}
          locale={locale}
        />
      ))}

      <section className="mt-24 pt-16 border-t border-ice-100/10">
        <div className="text-center mb-10">
          <span className="section-label">{t('partners.title')}</span>
          <h2 className="section-title mb-3">{t('partners.title')}</h2>
          <p className="text-sm text-stone-400">
            {isZh ? '感谢一路同行的品牌、平台与社群，展示不分先后。' : t('partners.description')}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {partners.map((partner) => (
            <div key={partner.id} className="glass-card min-h-28 p-4 flex flex-col items-center justify-center text-center gap-2">
              <div className="h-9 max-w-24 flex items-center justify-center">
                {partner.logo ? (
                  <img src={partner.logo} alt="" className={`max-w-full max-h-full object-contain ${partner.logoTone === 'light' ? 'partner-logo--light' : ''}`} />
                ) : (
                  <span className="text-xs font-semibold text-ice-200">{partner.logoText || partner.name}</span>
                )}
              </div>
              <span className="text-[11px] leading-tight text-stone-300">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
