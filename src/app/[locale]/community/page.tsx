import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Metadata } from 'next';
import {
  Cpu,
  Users,
  Building2,
} from 'lucide-react';
import { cityGroups, getAllUniversityInfos } from '@/lib/data/universities';
import type { UniversityInfo } from '@/lib/data/universities';

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
  const totalSchools = new Set(allClubs.map((c) => c.school)).size;

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
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
        <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-8">
          <div className="rounded-2xl border border-ice-100/15 bg-tundra-950/60 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-stone-100">
              <Building2 className="h-6 w-6 text-ice-200" />
              {cityGroups.length}
            </div>
            <div className="mt-2 text-xs font-medium tracking-wide text-stone-400">
              {isZh ? '覆盖城市' : 'Cities'}
            </div>
          </div>
          <div className="rounded-2xl border border-ice-100/15 bg-tundra-950/60 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-stone-100">
              <Users className="h-6 w-6 text-ice-200" />
              {allClubs.length}
            </div>
            <div className="mt-2 text-xs font-medium tracking-wide text-stone-400">
              {isZh ? '游戏开发社团' : 'Game Dev Clubs'}
            </div>
          </div>
          <div className="rounded-2xl border border-ice-100/15 bg-tundra-950/60 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-stone-100">
              <Building2 className="h-6 w-6 text-ice-200" />
              {totalSchools}
            </div>
            <div className="mt-2 text-xs font-medium tracking-wide text-stone-400">
              {isZh ? '覆盖高校' : 'Universities'}
            </div>
          </div>
        </div>
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
    </main>
  );
}
