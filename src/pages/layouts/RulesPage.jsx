export default function RulesPage({ data }) {
    const rules = data?.rules;
    return (
        <div className='flex flex-col gap-4 md:gap-6 lg:gap-8 w-[50%] text-[--color-texts]'>
            {rules.map((rule, index) => (
                <div key={index} className='flex flex-col gap-1'>
                    <p className='font-semibold'>
                        {index + 1}. {rule?.title}
                    </p>

                    <p>{rule?.description}</p>
                </div>
            ))}
        </div>
    );
}
