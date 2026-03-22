export default function RulesPage({ data }) {
    const rules = data?.rules;
    return (
        <>
            {rules.map((rule, index) => (
                <div key={index}>
                    <p>
                        {index + 1}. {rule?.title}
                    </p>

                    <p>{rule?.description}</p>
                </div>
            ))}
        </>
    );
}
