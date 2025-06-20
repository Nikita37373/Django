import * as React from "react";
import {Button, Form, type FormProps, Input} from "antd";
import type {ICategoryCreate} from "../../../services/types.ts";
import {useCreateCategoryMutation} from "../../../services/apiCategory.ts";


const CategoryCreatePage : React.FC = () => {
    const [createCategory] = useCreateCategoryMutation();



    const onFinish: FormProps<ICategoryCreate>['onFinish'] = (values) => {
        console.log('Success:', values);
        createCategory(values);
    };

    const onFinishFailed: FormProps<ICategoryCreate>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            <header className="bg-white shadow-sm">

                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Додати категорію</h1>
                </div>
            </header>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}

            >
                <Form.Item<ICategoryCreate>
                    label="Назва"
                    name="name"
                    rules={[{ required: true, message: 'Вкажыть назву категорый' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<ICategoryCreate>
                    label="Слаг"
                    name="slug"
                    rules={[{ required: true, message: 'Вкажыть слаг' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<ICategoryCreate>
                    label="Опис"
                    name="description"
                    rules={[{ required: true, message: 'Вкажыть опис' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Додати
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default CategoryCreatePage;