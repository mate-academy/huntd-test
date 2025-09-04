import React from 'react';
import cn from 'classnames';
import { MetaItem } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems';
import typography from '@/ui/typography/typography.module.scss';
import styles from './ProfileMeta.module.scss';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import { ProfileItemContent } from '@/controllers/profile/profile.constants';

interface Props {
  items: MetaItem[]
}
export const RecruiterProfileMeta = React.memo<Props>((props) => {
  const { items } = props;

  return (
    <ul className={styles.metaWrapper}>
      {items.map((item) => (
        item.text !== ProfileItemContent.Empty && (
          <li
            className={cn(styles.recruiterMetaItem, typography.smallHeading)}
            key={item.name}
          >
            <>
              {item.name === 'city' && (<IconLocation className={styles.icon} />)}
              <span>{item.text}</span>
            </>
          </li>
        )
      ))}
    </ul>
  );
});
