import React from 'react';
import cn from 'classnames';
import { MetaItem as RecruiterMetaItem } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems';
import { MetaItem as CandidateMetaItem } from '@/controllers/candidateProfile/candidateProfile.hooks/useCandidateProfileMetaItems';
import typography from '@/ui/typography/typography.module.scss';
import { CandidateProfileMetaItems } from '@/controllers/candidateProfile/candidateProfile.typedefs';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import styles from './ProfileMeta.module.scss';

interface Props {
  items: RecruiterMetaItem[] | CandidateMetaItem[]
}

export const ProfileMeta = React.memo<Props>((props) => {
  const { items } = props;

  return (
    <ul className={styles.metaWrapper}>
      {items.map((item) => {
        let icon = null;
        if (
          item.name === CandidateProfileMetaItems.Location ||
          item.name === RecruiterProfileMetaItems.Location
        ) {
          icon = <IconLocation />;
        }

        return (
          <li className={cn(styles.metaItem, typography.smallText, 'c-semidark-chocolate')} key={item.name}>
            {icon}
            {item.text}
            {items.indexOf(item) !== items.length - 1 && <span className={styles.divider} />}
          </li>
        );
      })}
    </ul>
  );
});
