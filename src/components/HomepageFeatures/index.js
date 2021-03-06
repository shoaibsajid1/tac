import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Level 1',
    Svg: require('@site/static/img/support.svg').default,
    description: (
      <>
        Every call lands here.
      </>
    ),
  },
  {
    title: 'Access/NGN TAC',
    Svg: require('@site/static/img/phone.svg').default,
    description: (
      <>
        ATAs, POTS, PONs, Installation Admins and more.
      </>
    ),
  },
  {
    title: 'Systems TAC',
    Svg: require('@site/static/img/website.svg').default,
    description: (
      <>
        Web hosting, Mail hosting, SSL,  SMTP relaying and more.
      </>
    ),
  },
];

const FeatureList2 = [
  {
    title: 'Mails Status',
    description: (
      <>
        Use downdetector for now(coming soon)
      </>
    ),
  },
  {
    title: 'CRM Status',
    description: (
      <>
Use downdetector for now(coming soon)
       </>
    ),
  },
];

function Feature2({title, description}) {
  return (
    <div className={clsx('col col--4')}>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {description}
      </div>
    </div>
  );
}

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          
        </div>
        <div className="row">
          {FeatureList2.map((props, idx) => (
            <Feature2 key={idx} {...props} />
          ))}
          
        </div>
      </div>
    </section>
  );
}
