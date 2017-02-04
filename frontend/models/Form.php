<?php

namespace frontend\models;

use Yii;

/**
 * This is the model class for table "form".
 *
 * @property integer $Id
 * @property string $name
 * @property string $email
 * @property string $body
 * @property integer $from
 */
class Form extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'form';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'email', 'body'], 'required'],
            [['body'], 'string'],
            [['from'], 'integer'],
            [['name'], 'string', 'max' => 30],
            [['email'], 'string', 'max' => 50],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'Id' => 'ID',
            'name' => 'Name',
            'email' => 'Email',
            'body' => 'Body',
            'from' => 'From',
        ];
    }
}
