export default function RulesPage({ data }) {
    const rules = data?.rules;
    return (
        <div className='flex flex-col gap-4 md:gap-6 lg:gap-8 w-[90%] text-[--color-texts] bg-[--color-secondary] px-14 py-12'>
            {rules.map((rule, index) => (
                <div key={index} className='flex flex-col gap-1 pl-6'>
                    <p className='font-semibold relative'>
                        <span className='absolute left-[-60px] top-[50%] translate-y-[-50%] border rounded-full bg-[--color-primary] w-10 h-10 flex justify-center items-center'>
                            {index + 1}
                        </span>{' '}
                        <span>{rule?.title}</span>
                    </p>

                    <p>{rule?.description}</p>
                </div>
            ))}
        </div>
    );
}
