import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    link: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Decisions4s',
        Svg: require('@site/static/img/decisions4s-logo.drawio.svg').default,
        description: (
            <>
                A library helping with taming the complexity of conditional logic.
            </>
        ),
        link: 'https://business4s.github.io/decisions4s/'
    },
    {
        title: 'Workflows4s',
        Svg: require('@site/static/img/workflows4s-logo.drawio.svg').default,
        description: (
            <>
                Prototype of a library for building long-running stateful workflows.
            </>
        ),
        link: 'https://business4s.github.io/workflows4s/'
    },
    {
        title: 'Domain-Oriented Scala Style Guide',
        Svg: require('@site/static/img/domain-scala-guide.drawio.svg').default,
        description: (
            <>
                An opinionated Scala style guide helping to focus the code on the business domain instead of technical
                aspects.
            </>
        ),
        link: 'https://github.com/business4s/domain-oriented-scala-style-guide'
    },
    {
        title: 'Mentorship Program',
        Svg: require('@site/static/img/business4s-mentorship.drawio.svg').default,
        description: (
            <>
                Helping people achieve their goals around Scala.
            </>
        ),
        link: 'https://business4s.org/mentorship'
    },
];

function Feature({title, Svg, description, link}: FeatureItem) {
    return (
        <div className={clsx('col col--6')}>
            <a href={link} target="_blank" rel="noopener noreferrer" className="feature-link">
                <div className="text--center padding-horiz--md">
                    {Svg && <div className="text--center">
                        <Svg className={styles.featureSvg} role="img"/>
                    </div>}
                    <Heading as="h3">{title}</Heading>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}