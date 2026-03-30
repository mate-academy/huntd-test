import React from 'react';
import cn from 'classnames';
import { MetaItem } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems';
import { RecruiterProfileMetaItems } from '@/controllers/recruiterProfile/recruiterProfile.typedefs';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import typography from '@/ui/typography/typography.module.scss';
import styles from './ProfileMeta.module.scss';

interface Props {
  items: MetaItem[]
}
export const RecruiterProfileMeta = React.memo<Props>((props) => {
  const { items } = props;

  return (
    <ul className={styles.metaWrapper}>
      {items.map((item) => {
        if (item.name === RecruiterProfileMetaItems.City) {
          return (
            <li
              className={cn(styles.recruiterMetaItemWithIcon, typography.smallHeading)}
              key={item.name}
            >
              <IconLocation />
              {item.text}
            </li>
          );
        }

        return (
          <li
            className={cn(styles.recruiterMetaItem, typography.smallHeading)}
            key={item.name}
          >
            {item.text}
          </li>
        );
      })}
    </ul>
  );
});
